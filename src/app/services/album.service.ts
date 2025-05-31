import { Injectable, computed, signal } from '@angular/core';
import { Album } from '../models/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  // State
  private albumsSignal = signal<Album[]>([]);

  // Selectors (Computed Signals)
  readonly albums = computed(() => this.albumsSignal());
  readonly albumCount = computed(() => this.albums().length);
  readonly totalPhotos = computed(() => 
    this.albums().reduce((sum, album) => sum + album.imageCount, 0)
  );

  constructor() {
    // Initialize with some sample data
    this.albumsSignal.set([
      {
        id: '1',
        name: 'Family Vacation 2024',
        coverImage: 'assets/images/porfolio-01.jpg',
        description: 'Memories from our summer trip',
        createdAt: new Date(),
        updatedAt: new Date(),
        imageCount: 24
      },
      {
        id: '2',
        name: 'Wedding Shoot',
        coverImage: 'assets/images/porfolio-01.jpg',
        description: 'Beautiful moments captured',
        createdAt: new Date(),
        updatedAt: new Date(),
        imageCount: 156
      }
    ]);
  }

  // Actions
  createAlbum(album: Omit<Album, 'id' | 'createdAt' | 'updatedAt'>): void {
    const newAlbum: Album = {
      ...album,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.albumsSignal.update(albums => [...albums, newAlbum]);
  }

  updateAlbum(id: string, updates: Partial<Omit<Album, 'id' | 'createdAt' | 'updatedAt'>>): void {
    this.albumsSignal.update(albums => 
      albums.map(album => 
        album.id === id 
          ? { ...album, ...updates, updatedAt: new Date() }
          : album
      )
    );
  }

  deleteAlbum(id: string): void {
    this.albumsSignal.update(albums => 
      albums.filter(album => album.id !== id)
    );
  }

  deleteAlbums(ids: string[]): void {
    this.albumsSignal.update(albums => 
      albums.filter(album => !ids.includes(album.id))
    );
  }

  getAlbumById(id: string): Album | undefined {
    return this.albums().find(album => album.id === id);
  }

  // Helper method to update image count when photos are added/removed
  updateAlbumImageCount(albumId: string, count: number): void {
    this.albumsSignal.update(albums =>
      albums.map(album =>
        album.id === albumId
          ? { ...album, imageCount: count, updatedAt: new Date() }
          : album
      )
    );
  }
} 