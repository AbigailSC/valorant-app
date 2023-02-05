import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/characters';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  character: Character[] | undefined;
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCharacters().subscribe((data) => {
      this.character = data.data;
      console.log(this.character);
    });
  }
  // getCharacters() {
  //   this.apiService.getCharacters().subscribe((data) => {
  //     this.character = data.data;
  //     console.log(this.character);
  //   });
  // }
}
