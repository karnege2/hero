import { Component, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../models/Hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros().subscribe((hero) => {
      this.heroes = hero;
    });
  }

  onClick(hero: Hero): void {
    this.messageService.add(`you chose ${hero.name}`);
  }

  goBack(): void {
    this.location.back();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.onClick(hero);
  }
}
