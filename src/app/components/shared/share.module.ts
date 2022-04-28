import { NgModule } from '@angular/core';
import { GraphQLModule } from 'src/app/modules/graphql/graphql.module';
import { NgxTranslateModule } from 'src/app/modules/translate/translate.module';
import { ProgressComponent } from './progress/progress.component';
import { FileUploadComponent } from './upload/file-upload.component';

@NgModule({
  declarations: [FileUploadComponent, ProgressComponent],
  imports: [GraphQLModule, NgxTranslateModule],
  providers: [],
  exports: [FileUploadComponent, ProgressComponent]
})
export class ShareModule {}