import { Component, OnInit, ViewChild, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { Album } from '../../models/album.interface';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule
  ],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  @ViewChild('createAlbumDialog') createAlbumDialog!: TemplateRef<any>;
  @ViewChild('deleteConfirmDialog') deleteConfirmDialog!: TemplateRef<any>;

  private albumService = inject(AlbumService);

  // Use signals from the service
  albums = this.albumService.albums;
  selectedAlbums: Album[] = [];
  isSelectionMode = false;
  albumForm: FormGroup;
  coverPreview: string | null = null;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.albumForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      coverImage: ['']
    });
  }

  ngOnInit(): void {
    // No need to load albums manually as they're managed by the service
  }

  openCreateAlbumDialog(): void {
    this.albumForm.reset();
    this.coverPreview = null;
    this.dialog.open(this.createAlbumDialog, {
      width: '500px'
    });
  }

  uploadCover(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.coverPreview = reader.result as string;
          this.albumForm.patchValue({ coverImage: file });
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  }

  saveAlbum(): void {
    if (this.albumForm.valid) {
      const { name, description, coverImage } = this.albumForm.value;
      
      // Create new album using service
      this.albumService.createAlbum({
        name,
        description,
        coverImage: this.coverPreview || 'assets/images/default-album.jpg',
        imageCount: 0
      });

      this.dialog.closeAll();
    }
  }

  openAlbum(album: Album): void {
    // TODO: Navigate to album detail view
    console.log('Opening album:', album);
  }

  editAlbum(album: Album): void {
    // Set form values
    this.albumForm.patchValue({
      name: album.name,
      description: album.description
    });
    this.coverPreview = album.coverImage;

    // Open dialog
    const dialogRef = this.dialog.open(this.createAlbumDialog, {
      width: '500px'
    });

    // Handle save
    dialogRef.afterClosed().subscribe(result => {
      if (result && this.albumForm.valid) {
        const { name, description } = this.albumForm.value;
        this.albumService.updateAlbum(album.id, {
          name,
          description,
          coverImage: this.coverPreview || album.coverImage
        });
      }
    });
  }

  deleteAlbum(album: Album): void {
    this.selectedAlbums = [album];
    this.openDeleteConfirmDialog();
  }

  toggleSelection(album: Album): void {
    const index = this.selectedAlbums.findIndex(a => a.id === album.id);
    if (index === -1) {
      this.selectedAlbums.push(album);
    } else {
      this.selectedAlbums.splice(index, 1);
    }
  }

  isSelected(album: Album): boolean {
    return this.selectedAlbums.some(a => a.id === album.id);
  }

  openDeleteConfirmDialog(): void {
    this.dialog.open(this.deleteConfirmDialog, {
      width: '400px'
    });
  }

  confirmDelete(): void {
    const ids = this.selectedAlbums.map(album => album.id);
    this.albumService.deleteAlbums(ids);
    this.selectedAlbums = [];
    this.isSelectionMode = false;
    this.dialog.closeAll();
  }
}
