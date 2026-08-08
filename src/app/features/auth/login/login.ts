import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { Button } from '../../../shared/ui/button/button';
import { Logo } from '../../../shared/ui/logo/logo';
import { TextField } from '../../../shared/ui/text-field/text-field';

@Component({
  selector: 'app-login',
  imports: [TextField, Button, Logo],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  protected readonly email = signal('');
  protected readonly password = signal('');

  protected onSubmit(event: Event): void {
    event.preventDefault();
  }
}
