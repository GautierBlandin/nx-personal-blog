import { Config } from '@markdoc/markdoc';
import { fence } from './code-block';
import { paragraph } from './paragraph';
import { list } from './list';
import { heading } from './heading';
import { separator } from './separator';
import { table, tbody, td, th, thead, tr } from './table';

export const markdownConfig: Config = {
  nodes: {
    paragraph,
    fence,
    list,
    heading,
    hr: separator,
    table,
    thead,
    tbody,
    tr,
    th,
    td,
  },
};
