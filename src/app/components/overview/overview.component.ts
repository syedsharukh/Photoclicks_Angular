import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-overview',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  images = [
    {
      src: 'assets/images/child-with-camera.jpg',
      alt: 'Wide Image',
      col: '1 / span 2',  // spans columns 1 and 2
      row: '1 / span 1',   // spans 1 row
      width: '680',
      height: '400'
    },
    {
      src: 'assets/images/car-01.jpg',
      alt: 'Tall Image',
      col: '3 / span 1',  // column 3
      row: '5 / span 1',   // spans rows 1 and 2
      width: '279',
      height: '250'
    },
    {
      src: 'assets/images/camera-01.jpg',
      alt: 'Large Image',
      col: '1 / span 2',  // columns 1 and 2
      row: '5 / span 2',   // rows 2 and 3
      width: '380',
      height: '250'
    }
  ];
  portfolio = {
    src: 'assets/images/porfolio-01.jpg',
    alt: 'Portfolio group',
    width: '483',
    height: '459'
  }
  introHeading = 'Unleash the Art of Photography';
  introDescription = `At Capture Studio, we specialize in capturing life's most precious moments, transforming them into timeless works of art. Our team of passionate photographers is dedicated to telling stories through the lens, ensuring that every click captures the essence of your unique journey.`;
  introButtonLabel = 'Book Your New Session';

  portfolioHighlightedText = "Immortalize Your Memories";
  portfolioHeading = "Experience Photography Like Never Before";
  portfolioDescription = "With our state-of-the-art equipment and artistic vision, we transform ordinary moments into extraordinary memories. Our talented photographers...";
  portfolioButtonLabel = 'Explore Our Portfolio';

  expertiseHeading = "Explore Our Expertise";

  expertiseCards = [
    {
      heading: 'Professional editing',
      src: 'assets/svg/editing-01.svg',
      width: '72',
      height: '72',
      description: 'Your creativity our inspiration.Whatever your want'
    },
    {
      heading: 'Long hour shoots',
      src: 'assets/svg/book-01.svg',
      width: '72',
      height: '72',
      description: 'Your creativity our inspiration.Whatever your want'
    },
    {
      heading: 'Extensive equipment',
      src: 'assets/svg/camera-01.svg',
      width: '72',
      height: '72',
      description: 'Your creativity our inspiration.Whatever your want'
    }
  ]

  creativityHeading = "Unmatched Creativity";
  creativityDescription = "With over 10 years of experience, we have captured countless moments and crafted stunning visuals. Our team's dedication and passion have led to numerous awards and recognition. Join the growing number of satisfied clients who have experienced the magic of Capture Studio."
  
  creativityImage = {
    src: 'assets/images/creativity-01.jpg',
    width: '723',
    height: '508'
  }

  creativityCards = [
    {
      number: '550+',
      description: 'Happy Clients',
    },
    {
      number: '38+',
      description: 'Awards Won',
    },
    {
      number: '9000+',
      description: 'Captured Events',
    }
  ]

  gallery = [
  {
    src: 'assets/images/gallery-01.jpg',
    alt: 'Gallery Image 01',
    col: '1 / span 2',
    row: '1 / span 2',
    width: '780',
    height: '402'
  },
  {
    src: 'assets/images/gallery-02.jpg',
    alt: 'Gallery Image 02',
    col: '3 / span 2',
    row: '1 / span 2',
    width: '380',
    height: '402'
  },
  {
    src: 'assets/images/gallery-03.jpg',
    alt: 'Gallery Image 03',
    col: '1 / span 1',
    row: '5 / span 3',
    width: '380',
    height: '824'
  },
  {
    src: 'assets/images/gallery-04.jpg',
    alt: 'Gallery Image 04',
    col: '2 / span 3',
    row: '5 / span 2',
    width: '780',
    height: '402'
  },
  {
    src: 'assets/images/gallery-05.jpg',
    alt: 'Gallery Image 05',
    col: '2 / span 1',
    row: '9 / span 1',
    width: '380',
    height: '402'
  },
  {
    src: 'assets/images/gallery-06.jpg',
    alt: 'Gallery Image 06',
    col: '3 / span 2',
    row: '9 / span 1',
    width: '380',
    height: '402'
  }
];

}
