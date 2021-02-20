import { Component, OnInit } from '@angular/core';
import { QUOTES } from './../quotes';
export interface quoteType { quote: string, author: string }

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  quote: quoteType;
  favouriteQuotes: any;
  constructor() {
    const getQuotes = localStorage.getItem('favQuotes');
    this.favouriteQuotes = JSON.parse(getQuotes) || [];
  }

  ngOnInit() {
    this.generateQuote();
  }

  generateQuote() {
    let index = Math.floor(Math.random() * Math.floor(QUOTES.length));
    this.quote = QUOTES[index];
  }

  addToFavourites() {
    this.favouriteQuotes.push(this.quote);
    const fav = JSON.stringify(this.favouriteQuotes);
    localStorage.setItem('favQuotes', fav);
  }
}
