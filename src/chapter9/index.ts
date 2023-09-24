import { Logger } from '../shared/logger';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { Node } from './Node';

const root: Node = new Menu('root');

root.addItem(new MenuItem('item1', root));
root.addItem(new MenuItem('item2', root));
root.addItem(new MenuItem('item3', root));
const sub1 = new Menu('sub1', root);

root.addItem(sub1);
sub1.addItem(new MenuItem('sub1-item1', sub1));
sub1.addItem(new MenuItem('sub1-item2', sub1));
sub1.addItem(new MenuItem('sub1-item3', sub1));
const sub2 = new Menu('sub2', sub1);

sub1.addItem(sub2);

sub2.addItem(new MenuItem('sub2-item1', sub2));
sub2.addItem(new MenuItem('sub2-item2', sub2));
sub2.addItem(new MenuItem('sub2-item3', sub2));

const sub3 = new Menu('sub3', root);

root.addItem(sub3);
sub3.addItem(new MenuItem('sub3-item1', root));
sub3.addItem(new MenuItem('sub3-item2', root));
sub3.addItem(new MenuItem('sub3-item3', root));

const repr = root.getRepresentation();

Logger.log(`\n${repr}`);
