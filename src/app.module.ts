import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController, PostController],
  providers: [AppService, PostService],
})
export class AppModule {}
