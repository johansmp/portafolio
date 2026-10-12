import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Principles } from './principles/principles';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { RevealDirective } from './shared/reveal.directive';
import { ScrollProgressDirective } from './shared/scroll-progress.directive';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    Skills,
    Projects,
    Principles,
    Experience,
    Contact,
    Footer,
    RevealDirective,
    ScrollProgressDirective,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
