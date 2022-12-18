import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page01RoutingModule } from './page01-routing.module';
import { Page01Component } from './page01.component';

@NgModule({
  declarations: [Page01Component],
  imports: [CommonModule, Page01RoutingModule],
})
export class Page01Module {}
