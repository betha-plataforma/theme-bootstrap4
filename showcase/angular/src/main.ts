import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// O método "applyPolyfills" é necessário ser invocado caso queira suportar IE11 e Edge
import { applyPolyfills, defineCustomElements } from '@bethasistemas/estrutura-componentes/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

applyPolyfills().then(() => {
  defineCustomElements(window);
});
