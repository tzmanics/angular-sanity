import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() product: Product = {
    name: 'test',
    id: '1',
    price: '1.23',
    url: 'https://netlify.com',
    image: 'https://bit.ly/20o7MGL',
    description: 'test',
  };

  constructor() {}

  ngOnInit(): void {}
}
