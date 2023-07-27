import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return 'Signed in Successfully';
  }

  signup() {
    return 'Signed up Successfully';
  }
}
