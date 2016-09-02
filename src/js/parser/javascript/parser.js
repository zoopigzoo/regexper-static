// Sets up the parser generated by canopy to use the
// [Node](./javascript/node.html) subclasses in the generated tree. This is all
// a bit of a hack that is dependent on how canopy creates nodes in its parse
// tree.
import parser from './grammar.peg';

import Node from './node.js';
import Root from './root.js';
import Regexp from './regexp.js';
import Match from './match.js';
import MatchFragment from './match_fragment.js';
import Anchor from './anchor.js';
import Subexp from './subexp.js';
import Charset from './charset.js';
import CharsetEscape from './charset_escape.js';
import CharsetRange from './charset_range.js';
import Literal from './literal.js';
import Entity from './entity.js';
import Nestregex from './nestregex.js';
import Wordset from './wordset.js';
import Escape from './escape.js';
import AnyCharacter from './any_character.js';
import Repeat from './repeat.js';
import RepeatAny from './repeat_any.js';
import RepeatOptional from './repeat_optional.js';
import RepeatRequired from './repeat_required.js';
import RepeatSpec from './repeat_spec.js';

// Canopy creates an instance of SyntaxNode for each element in the tree, then
// adds any necessary fields to that instance. In this case, we're replacing
// the default class with the Node class.
parser.Parser.SyntaxNode      = Node;

// Once the SyntaxNode instance is created, the specific node type object is
// overlayed onto it. This causes the module attribute on the Node to be set,
// which updates the Node instance into the more specific "subclass" that is
// used for rendering.
parser.Parser.Root            = { module: Root };
parser.Parser.Regexp          = { module: Regexp };
parser.Parser.Match           = { module: Match };
parser.Parser.MatchFragment   = { module: MatchFragment };
parser.Parser.Anchor          = { module: Anchor };
parser.Parser.Subexp          = { module: Subexp };
parser.Parser.Charset         = { module: Charset };
parser.Parser.CharsetEscape   = { module: CharsetEscape };
parser.Parser.CharsetRange    = { module: CharsetRange };
parser.Parser.Literal         = { module: Literal };
parser.Parser.Entity          = { module: Entity};
parser.Parser.Nestregex       = { module: Nestregex};
parser.Parser.Wordset         = { module: Wordset};
parser.Parser.Escape          = { module: Escape };
parser.Parser.AnyCharacter    = { module: AnyCharacter };
parser.Parser.Repeat          = { module: Repeat };
parser.Parser.RepeatAny       = { module: RepeatAny };
parser.Parser.RepeatOptional  = { module: RepeatOptional };
parser.Parser.RepeatRequired  = { module: RepeatRequired };
parser.Parser.RepeatSpec      = { module: RepeatSpec };

export default parser;
