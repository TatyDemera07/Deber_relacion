import { Global, DataBaseModule } from '@nestjs/common';
import { autorProviders} from 'src/autor/autor.service';

@Global()
@DataBaseModule({
    imports: [ DataBaseModule],
    controllers: [],
    providers: [...autorProviders],
    exports: [],
  })
export class autorModule {}