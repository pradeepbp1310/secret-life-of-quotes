import { Component, OnInit } from '@angular/core';
import { QUOTES } from './quotes';
export interface quoteType { quote: string, author: string }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  quote: quoteType;
  favouriteQuotes: any;
  constructor() {
    this.favouriteQuotes = localStorage.getItem('favQuotes') || [];
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
