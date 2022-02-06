import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://dbUser:OBubPMXP8vQJcNYC@cluster0.i4kao.mongodb.net/test',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
