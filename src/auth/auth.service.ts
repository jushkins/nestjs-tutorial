import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return 'Signed in Successfully';
  }

  signup() {
    return 'Signed up Successfully';
  }
}
