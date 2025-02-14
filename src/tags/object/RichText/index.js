import { RichTextModel } from './model';
import { HtxRichText } from './view';
import { TableText, TableTextModel } from './table';
import Registry from '../../../core/Registry';

Registry.addTag('text', RichTextModel, HtxRichText({ isText: true }));
Registry.addTag('hypertext', RichTextModel, HtxRichText({ isText: false }));
Registry.addTag('tabletext', TableTextModel, TableText());
Registry.addObjectType(RichTextModel);
Registry.addObjectType(TableTextModel);

export { RichTextModel, HtxRichText };
