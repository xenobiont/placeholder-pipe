import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaceholderPipe } from './placeholder.pipe';
import { PlaceholderPipe2 } from './placeholder2.pipe';

@NgModule({
	declarations: [AppComponent, PlaceholderPipe, PlaceholderPipe2],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
