import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent, providers } from './';

@NgModule({
    imports: [
        routing,
        BrowserModule,
        HttpModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        ...providers
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
