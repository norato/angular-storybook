import { storiesOf } from '@storybook/angular';
import { CustomDirectiveDirective } from '../app/custom-directive.directive';
import { AppComponent } from '../app/app.component';

storiesOf('App Component', module)
  .add('Component with separate template', () => ({
    component: AppComponent,
    moduleMetadata: {
      declarations: [CustomDirectiveDirective]
    }
  }));
