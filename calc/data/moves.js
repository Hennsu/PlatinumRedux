"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a, e_2, _b;
exports.__esModule = true;

var util_1 = require("../util");
var RBY = {
    '(No Move)': { bp: 0, category: 'Status', type: 'Normal' },
    Absorb: { bp: 45, type: 'Grass', drain: [1, 2] },
    Acid: { bp: 65, type: 'Poison' },
    Amnesia: { bp: 0, category: 'Status', type: 'Psychic' },
    'Aurora Beam': { bp: 70, type: 'Ice' },
    Bite: { bp: 60, type: 'Normal' },
    Blizzard: { bp: 110, type: 'Ice' },
    Bonemerang: { bp: 105, type: 'Ground' },
    Bubble: { bp: 55, type: 'Water' },
    'Bubble Beam': { bp: 75, type: 'Water' },
    'Comet Punch': { bp: 35, type: 'Fighting', multihit: 2 },
    Constrict: { bp: 50, type: 'Grass' },
    Counter: { bp: 1, type: 'Fighting' },
    Crabhammer: { bp: 105, type: 'Water' },
    'Defense Curl': { bp: 0, category: 'Status', type: 'Normal' },
    Dig: { bp: 60, type: 'Ground' },
    'Dizzy Punch': { bp: 85, type: 'Normal' },
    'Double-Edge': { bp: 125, type: 'Normal', recoil: [1, 3] },
    'Double Slap': { bp: 35, type: 'Normal', multihit: 2 },
    'Dragon Rage': { bp: 100, type: 'Dragon' },
    'Dream Eater': { bp: 60, type: 'Dark', drain: [1, 2] },
    Earthquake: { bp: 85, type: 'Ground' },
    'Fire Blast': { bp: 110, type: 'Fire' },
    'Fire Spin': { bp: 65, type: 'Fire' },
    Fissure: { bp: 105, type: 'Ground' },
    Fly: { bp: 75, type: 'Flying' },
    'Focus Energy': { bp: 0, category: 'Status', type: 'Fighting' },
    'Takeoff': { bp: 0, category: 'Status', type: 'Flying' },
    'Sweet Kiss': { bp: 0, category: 'Status', type: 'Flying' },
    'Lock On': { bp: 0, category: 'Status', type: 'Steel' },
    'Belly Drum': { bp: 0, category: 'Status', type: 'Steel' },
    'Belly Drum': { bp: 0, category: 'Status', type: 'Steel' },
    'Fury Attack': { bp: 30, type: 'Normal', multihit: 2 },
    'Fury Swipes': { bp: 40, type: 'Normal', multihit: 2 },
    Glare: { bp: 0, category: 'Status', type: 'Normal' },
    Growth: { bp: 0, category: 'Status', type: 'Normal' },
    Gust: { bp: 55, type: 'Normal' },
    Haze: { bp: 60, type: 'Ice' },
    'High Jump Kick': { bp: 105, type: 'Fighting', recoil: [25, 100] },
    'Horn Drill': { bp: 125, type: 'Ground' },
    'Karate Chop': { bp: 70, type: 'Normal' },
    'Leech Seed': { bp: 0, category: 'Status', type: 'Grass' },
    'Light Screen': { bp: 0, category: 'Status', type: 'Psychic' },
    'Night Shade': { bp: 1, type: 'Ghost' },
    'Petal Dance': { bp: 95, type: 'Grass' },
    'Pin Missile': { bp: 35, type: 'Bug', multihit: 2 },
    'Fury Cutter': { bp: 40, type: 'Bug', multihit: 2 },
    'Poison Sting': { bp: 50, type: 'Poison' },
    Psychic: { bp: 80, type: 'Psychic' },
    'Razor Leaf': { bp: 70, type: 'Grass' },
    Recover: { bp: 0, category: 'Status', type: 'Normal' },
    Reflect: { bp: 0, category: 'Status', type: 'Psychic' },
    Rest: { bp: 0, category: 'Status', type: 'Psychic' },
    'Rock Slide': { bp: 75, type: 'Rock' },
    'Rock Throw': { bp: 60, type: 'Rock' },
    'Sand Attack': { bp: 35, type: 'Ground' },
    'Seismic Toss': { bp: 1, type: 'Fighting' },
    'Skull Bash': { bp: 150, type: 'Fighting' },
    Slash: { bp: 90, type: 'Normal' },
    Sludge: { bp: 60, type: 'Poison' },
    'Soft-Boiled': { bp: 0, category: 'Status', type: 'Normal' },
    'Solar Beam': { bp: 120, type: 'Grass' },
    'Sonic Boom': { bp: 1, type: 'Electric' },
    Struggle: { bp: 50, type: 'Normal', recoil: [1, 2] },
    'Stun Spore': { bp: 0, category: 'Status', type: 'Grass' },
    Submission: { bp: 90, type: 'Fighting', recoil: [1, 4] },
    'Super Fang': { bp: 1, type: 'Normal' },
    Swift: { bp: 80, type: 'Normal' },
    Thrash: { bp: 105, type: 'Normal' },
    Thunder: { bp: 110, type: 'Electric' },
    'Thunder Wave': { bp: 0, category: 'Status', type: 'Electric' },
    'Tri Attack': { bp: 75, type: 'Normal' },
    Twineedle: { bp: 40, type: 'Bug', multihit: 2 },
    'Dual Wingbeat': { bp: 40, type: 'Flying', multihit: 2 },
    Growl: { bp: 35, type: 'Dragon' },
    Leer: { bp: 35, type: 'Normal' },
    'Poison Gas': { bp: 0, category: 'Status', type: 'Poison' },
    'Poison Powder': { bp: 0, category: 'Status', type: 'Poison' },
    'String Shot': { bp: 70, type: 'Bug' },
    Surf: { bp: 80, type: 'Water' },
    'Tail Whip': { bp: 35, type: 'Fighting' },
    Toxic: { bp: 0, category: 'Status', type: 'Poison' },
    Hypnosis: { bp: 0, category: 'Status', type: 'Psychic' },
    'Leech Life': { bp: 70, type: 'Bug', drain: [1, 2] },
    'Mega Drain': { bp: 55, type: 'Grass', drain: [1, 2] },
    'Vine Whip': { bp: 55, type: 'Grass' },
    Waterfall: { bp: 80, type: 'Water' },
    Tackle: { bp: 55, type: 'Normal' },
    'Acid Armor': { bp: 0, category: 'Status', type: 'Poison' },
    Barrier: { bp: 0, category: 'Status', type: 'Psychic' },
    'Body Slam': { bp: 75, type: 'Normal' },
    Flamethrower: { bp: 80, type: 'Fire' },
    'Hydro Pump': { bp: 100, type: 'Water' },
    'Ice Beam': { bp: 80, type: 'Ice' },
    Lick: { bp: 55, type: 'Ghost' },
    Screech: { bp: 0, category: 'Status', type: 'Normal' },
    Sing: { bp: 0, category: 'Status', type: 'Normal' },
    'Sleep Powder': { bp: 0, category: 'Status', type: 'Grass' },
    Smog: { bp: 50, type: 'Poison' },
    Supersonic: { bp: 0, category: 'Status', type: 'Normal' },
    'Swords Dance': { bp: 0, category: 'Status', type: 'Normal' },
    Thunderbolt: { bp: 80, type: 'Electric' },
    'Bone Club': { bp: 55, type: 'Ground' },
    'Hyper Fang': { bp: 75, type: 'Normal' },
    Kinesis: { bp: 70, type: 'Psychic' },
    'Lovely Kiss': { bp: 0, category: 'Status', type: 'Normal' },
    Meditate: { bp: 0, category: 'Status', type: 'Psychic' },
    'Rolling Kick': { bp: 70, type: 'Fighting' },
    Sharpen: { bp: 0, category: 'Status', type: 'Normal' },
    Agility: { bp: 0, category: 'Status', type: 'Psychic' },
    'Confuse Ray': { bp: 0, category: 'Status', type: 'Ghost' },
    Confusion: { bp: 55, type: 'Psychic' },
    Cut: { bp: 60, type: 'Grass' },
    'Drill Peck': { bp: 80, type: 'Flying' },
    Ember: { bp: 60, type: 'Fire' },
    'Fire Punch': { bp: 75, type: 'Fire' },
    Harden: { bp: 0, category: 'Status', type: 'Normal' },
    Headbutt: { bp: 80, type: 'Normal', recoil: [1, 4] },
    'Horn Attack': { bp: 65, type: 'Normal' },
    'Ice Punch': { bp: 75, type: 'Ice' },
    'Pay Day': { bp: 80, type: 'Normal' },
    Pound: { bp: 50, type: 'Steel' },
    'Quick Attack': { bp: 50, type: 'Normal', priority: 1 },
    Scratch: { bp: 50, type: 'Normal' },
    Smokescreen: { bp: 35, type: 'Normal' },
    Strength: { bp: 75, type: 'Fighting' },
    'Thunder Punch': { bp: 75, type: 'Electric' },
    'Thunder Shock': { bp: 60, type: 'Electric' },
    'Water Gun': { bp: 60, type: 'Water' },
    Withdraw: { bp: 0, category: 'Status', type: 'Water' }
};
var GSC_PATCH = {
    Counter: { bp: 0 },
    Dig: { bp: 60 },
    'Double-Edge': { bp: 120 },
    Gust: { type: 'Flying' },
    'Karate Chop': { type: 'Fighting' },
    Struggle: { recoil: [1, 4] },
    'Dragon Rage': { bp: 100 },
    Bite: { type: 'Dark' },
    'Night Shade': { bp: 0 },
    'Sand Attack': { type: 'Ground' },
    'Seismic Toss': { bp: 0 },
    'Super Fang': { bp: 0 },
    'Dual Wingbeat': { bp: 40 },
    Aeroblast: { bp: 80, type: 'Flying' },
    'Cross Chop': { bp: 110, type: 'Fighting' },
    'Dream Eater': { type: 'Dark' },
    Endure: { bp: 0, category: 'Status', type: 'Normal', priority: 2 },
    Haze: { category: 'Special' },
    'Heal Bell': { bp: 0, category: 'Status', type: 'Normal' },
    'Icy Wind': { bp: 65, type: 'Ice' },
    'Mirror Coat': { bp: 0, type: 'Psychic' },
    Moonlight: { bp: 0, category: 'Status', type: 'Dark' },
    'Morning Sun': { bp: 0, category: 'Status', type: 'Fire' },
    Nightmare: { bp: 110, type: 'Ghost' },
    Outrage: { bp: 105, type: 'Dragon',recoil: [1, 4]},
    'Powder Snow': { bp: 55, type: 'Ice' },
    Protect: { bp: 0, category: 'Status', type: 'Normal', priority: 2 },
    'Rain Dance': { bp: 0, category: 'Status', type: 'Water' },
    Sandstorm: { bp: 0, category: 'Status', type: 'Rock' },
    Spikes: { bp: 0, category: 'Status', type: 'Ground' },
    Spite: { bp: 55, type: 'Ghost' },
    'Sunny Day': { bp: 0, category: 'Status', type: 'Fire' },
    Swagger: { bp: 0, category: 'Status', type: 'Normal' },
    Synthesis: { bp: 0, category: 'Status', type: 'Grass' },
    Twister: { bp: 60, type: 'Dragon' },
    'Ancient Power': { bp: 90, type: 'Rock' },
    Crunch: { bp: 85, type: 'Dark' },
    'Faint Attack': { bp: 80, type: 'Dark' },
    'Giga Drain': { bp: 65, type: 'Grass', drain: [1, 2] },
    'Rapid Spin': { bp: 60, type: 'Flying' },
    'Rock Smash': { bp: 55, type: 'Fighting' },
    'Spiderweb': { bp: 70, type: 'Bug' },
    'Recycle': { bp: 70, type: 'Bug' },
    Whirlpool: { bp: 65, type: 'Water' },
    'Zap Cannon': { bp: 80, type: 'Electric' },
    'Cotton Spore': { bp: 35, type: 'Grass' },
    'Extreme Speed': { bp: 70, type: 'Normal', priority: 1 },
    Magnitude: { bp: 0, type: 'Ground' },
    'Scary Face': { bp: 35, type: 'Ghost' },
    Charm: { bp: 0, category: 'Status', type: 'Normal' },
    Rollout: { bp: 55, type: 'Rock' },
    'Sacred Fire': { bp: 120, type: 'Fire' },
    'Dragon Breath': { bp: 75, type: 'Dragon' },
    'Dynamic Punch': { bp: 80, type: 'Fighting' },
    'Iron Tail': { bp: 90, type: 'Steel' },
    'Mach Punch': { bp: 50, type: 'Fighting', priority: 1 },
    Megahorn: { bp: 105, type: 'Bug' },
    'Metal Claw': { bp: 55, type: 'Steel' },
    'Mud-Slap': { bp: 50, type: 'Ground' },
    Octazooka: { bp: 70, type: 'Water' },
    'Pain Split': { bp: 0, category: 'Status', type: 'Ghost' },
    'Shadow Ball': { bp: 85, type: 'Ghost' },
    'Sludge Bomb': { bp: 80, type: 'Poison' },
    'Steel Wing': { bp: 75, type: 'Steel' },
    Leer: { type: 'Dark' },
    Smokescreen: { type: 'Dark' }
};
var GSC = (0, util_1.extend)(true, {}, RBY, GSC_PATCH);
var ADV_PATCH = {
    Acid: { target: 'allAdjacentFoes' },
    'Ancient Power': { makesContact: true },
    Blizzard: { target: 'allAdjacentFoes' },
    'Comet Punch': { makesContact: true },
    Counter: { makesContact: true },
    Crunch: { makesContact: true },
    Endure: { priority: 4 },
    Protect: { priority: 3 },
    Dig: { makesContact: true },
    'Double Slap': { makesContact: true },
    Fly: { makesContact: true },
    'Fury Attack': { makesContact: true },
    'Fury Swipes': { makesContact: true },
    'High Jump Kick': { makesContact: true },
    'Leech Life': { makesContact: true },
    Outrage: { makesContact: true },
    'Petal Dance': { makesContact: true },
    'Rapid Spin': { makesContact: true },
    'Rock Smash': { makesContact: true },
    'Skull Bash': { makesContact: true },
    Struggle: { makesContact: true },
    Surf: { target: 'allAdjacentFoes' },
    Thrash: { makesContact: true },
    'Vine Whip': { makesContact: true },
    Waterfall: { makesContact: true },
    Crabhammer: { makesContact: true },
    'Double-Edge': { recoil: [1, 3], makesContact: true },
    Earthquake: { target: 'allAdjacent' },
    'Extreme Speed': { makesContact: true },
    'Heal Bell': { isSound: true },
    Magnitude: { target: 'allAdjacent' },
    Submission: { makesContact: true },
    Tackle: { makesContact: true },
    Twister: { target: 'allAdjacentFoes' },
    'Body Slam': { makesContact: true },
    Bubble: { target: 'allAdjacentFoes' },
    Growl: { isSound: true, target: 'allAdjacentFoes' },
    Lick: { makesContact: true },
    Screech: { isSound: true },
    Sing: { isSound: true },
    'String Shot': { target: 'allAdjacentFoes' },
    Supersonic: { isSound: true },
    Rollout: { makesContact: true },
    Constrict: { makesContact: true },
    'Dizzy Punch': { makesContact: true },
    'Hyper Fang': { makesContact: true },
    'Karate Chop': { makesContact: true },
    'Rolling Kick': { makesContact: true },
    Bite: { makesContact: true },
    'Cross Chop': { makesContact: true },
    Cut: { makesContact: true },
    'Drill Peck': { makesContact: true },
    'Dynamic Punch': { makesContact: true },
    'Fire Punch': { makesContact: true },
    Headbutt: { makesContact: true },
    'Horn Attack': { makesContact: true },
    'Horn Drill': { makesContact: true },
    'Ice Punch': { makesContact: true },
    'Icy Wind': { target: 'allAdjacentFoes' },
    'Iron Tail': { makesContact: true },
    Leer: { target: 'allAdjacentFoes' },
    'Mach Punch': { makesContact: true },
    Megahorn: { makesContact: true },
    'Metal Claw': { makesContact: true },
    Pound: { makesContact: true },
    'Powder Snow': { target: 'allAdjacentFoes' },
    'Quick Attack': { makesContact: true },
    'Razor Leaf': { target: 'allAdjacentFoes' },
    'Rock Slide': { target: 'allAdjacentFoes' },
    Scratch: { makesContact: true },
    'Seismic Toss': { makesContact: true },
    Slash: { makesContact: true },
    'Steel Wing': { makesContact: true },
    Strength: { makesContact: true },
    'Super Fang': { makesContact: true },
    Swift: { target: 'allAdjacentFoes' },
    'Tail Whip': { target: 'allAdjacentFoes' },
    'Thunder Punch': { makesContact: true },
    'Dual Wingbeat': { makesContact: true },
    Astonish: { bp: 55, type: 'Ghost', makesContact: true },
    'Bullet Seed': { bp: 30, type: 'Grass', multihit: 2 },
    'Fake Out': { bp: 50, type: 'Normal', priority: 1 },
    Hail: { bp: 0, category: 'Status', type: 'Ice' },
    'Icicle Spear': { bp: 35, type: 'Ice', multihit: 2 },
    'Knock Off': { bp: 70, type: 'Dark', makesContact: true },
    'Leaf Blade': { bp: 80, type: 'Grass', makesContact: true },
    'Needle Arm': { bp: 85, type: 'Grass', makesContact: true },
    'Overheat': { bp: 125, type: 'Fire', self: { boosts: { spa: -2 } }, makesContact: false },
    'Sand Tomb': { bp: 65, type: 'Ground' },
    Clamour: { bp: 55, type: 'Normal', isSound: true },
    'Spider Web': { bp: 55, type: 'Normal', isSound: true },
    'Volt Tackle': { bp: 125, type: 'Electric', makesContact: true, recoil: [1, 3] },
    'Weather Ball': { bp: 45, type: 'Normal' },
    Aromatherapy: { bp: 0, category: 'Status', type: 'Grass' },
    'Brick Break': { bp: 80, type: 'Fighting', makesContact: true },
    'Sky Uppercut': { bp: 85, type: 'Fighting', makesContact: true },
    'Slack Off': { bp: 0, category: 'Status', type: 'Normal' },
    'Tail Glow': { bp: 0, category: 'Status', type: 'Bug' },
    'Torment': { bp: 75, type: 'Dark' },
    Wish: { bp: 0, category: 'Status', type: 'Normal' },
    'Air Cutter': { bp: 75, type: 'Flying', target: 'allAdjacentFoes' },
    'Grass Whistle': { bp: 0, category: 'Status', type: 'Grass', isSound: true },
    'Heat Wave': { bp: 80, type: 'Fire', target: 'allAdjacentFoes' },
    'Hyper Voice': { bp: 85, type: 'Normal', isSound: true, target: 'allAdjacentFoes' },
    'Metal Sound': { bp: 0, category: 'Status', type: 'Steel', isSound: true },
    'Meteor Mash': { bp: 110, type: 'Steel', makesContact: true },
    'Poison Fang': { bp: 75, type: 'Poison', makesContact: true },
    'Rock Tomb': { bp: 70, type: 'Rock' },
    'Will-O-Wisp': { bp: 0, category: 'Status', type: 'Fire' },
    'Ice Ball': { bp: 60, type: 'Ice', makesContact: true },
    'Sheer Cold': { bp: 90, type: 'Ice' },
    'Luster Purge': { bp: 75, type: 'Psychic' },
    'Signal Beam': { bp: 65, type: 'Bug' },
    'Silver Wind': { bp: 80, type: 'Bug' },
    'Aerial Ace': { bp: 55, type: 'Flying', makesContact: true },
    'Blast Burn': { bp: 120, type: 'Fire', recoil: [1, 3] },
    'Blaze Kick': { bp: 90, type: 'Fire', makesContact: true },
    'Bulk Up': { bp: 0, category: 'Status', type: 'Fighting' },
    'Calm Mind': { bp: 0, category: 'Status', type: 'Psychic' },
    'Cosmic Power': { bp: 0, category: 'Status', type: 'Psychic' },
    'Tear Up': { bp: 85, type: 'Normal', makesContact: true },
    'Crush Claw': { bp: 85, type: 'Normal', makesContact: true },
    'Dragon Claw': { bp: 85, type: 'Dragon', makesContact: true },
    'Dragon Dance': { bp: 0, category: 'Status', type: 'Dragon' },
    Eruption: { bp: 90, type: 'Fire', target: 'allAdjacentFoes' },
    'Feather Dance': { bp: 0, category: 'Status', type: 'Flying' },
    'Frenzy Plant': { bp: 105, type: 'Grass' },
    'Hydro Cannon': { bp: 120, type: 'Water' },
    'Iron Defense': { bp: 0, category: 'Status', type: 'Steel' },
    'Magical Leaf': { bp: 75, type: 'Grass' },
    'Mud Shot': { bp: 60, type: 'Ground' },
    'Poison Tail': { bp: 100, type: 'Poison', makesContact: true },
    'Shadow Punch': { bp: 75, type: 'Ghost', makesContact: true },
    'Shock Wave': { bp: 75, type: 'Electric' },
    Superpower: { bp: 115, type: 'Fighting', self: { boosts: { atk: -1, def: -1 } }, makesContact: true },
    'Scale Smash': { bp: 95, type: 'Dragon', self: { boosts: { atk: -1, def: -1 } }, makesContact: true },
    'False Swipe': { bp: 95, type: 'Dragon', self: { boosts: { atk: -1, def: -1 } }, makesContact: true },
    'Short Circuit': { bp: 120, type: 'Electric', self: { boosts: { atk: -1, def: -1 } }, makesContact: false },
    'Psych Up': { bp: 115, type: 'Electric', self: { boosts: { atk: -1, def: -1 } }, makesContact: false },
    'Guillotine': { bp: 110, type: 'Bug', recoil: [1, 4], makesContact: true },
    'Noxious Blast': { bp: 95, type: 'Poison', recoil: [1, 4], makesContact: false },
    'Psywave': { bp: 90, type: 'Poison', recoil: [1, 4], makesContact: false },
    'Psycho Boost': { bp: 115, type: 'Psychic', self: { boosts: { spa: -1 } }, makesContact: false },
    'Water Spout': { bp: 105, type: 'Water', target: 'allAdjacentFoes' },
    Yawn: { bp: 0, category: 'Status', type: 'Normal' }
};
var ADV = (0, util_1.extend)(true, {}, GSC, ADV_PATCH);
var DPP_PATCH = {
    Absorb: { category: 'Special' },
    Bonemerang: { category: 'Physical' },
    'Brick Break': { category: 'Physical' },
    'Bullet Seed': { category: 'Physical' },
    'Comet Punch': { isPunch: true, category: 'Physical' },
    'Cotton Spore': { category: 'Special' },
    Counter: { category: 'Physical' },
    Crabhammer: { category: 'Physical' },
    Dig: { bp: 60, category: 'Physical' },
    'Double-Edge': { category: 'Physical' },
    'Double Slap': { category: 'Physical' },
    'Dream Eater': { category: 'Special' },
    Earthquake: { category: 'Physical' },
    'Extreme Speed': { category: 'Physical' },
    'Fake Out': { makesContact: true, category: 'Physical' },
    'Fire Spin': { category: 'Special' },
    Fly: { bp: 75, category: 'Physical' },
    'Fury Attack': { category: 'Physical' },
    'Fury Swipes': { category: 'Physical' },
    'Giga Drain': { category: 'Special' },
    'Noxious Blast': { category: 'Special' },
    Growl: { category: 'Special' },
    Gust: { category: 'Special' },
    'High Jump Kick': { bp: 105, category: 'Physical', recoil: [1, 4] },
    'Icicle Spear': { category: 'Physical' },
    Kinesis: { category: 'Special' },
    'Knock Off': { category: 'Physical' },
    'Leech Life': { category: 'Physical' },
    Leer: { category: 'Special' },
    Magnitude: { category: 'Physical' },
    'Mega Drain': { category: 'Special' },
    'Mirror Coat': { category: 'Special' },
    'Nightmare': { category: 'Special' },
    Outrage: { bp: 110, category: 'Physical' },
    'Petal Dance': { bp: 90, category: 'Special' },
    'Pin Missile': { category: 'Special' },
    'Fury Cutter': { category: 'Physical' },
    'Rapid Spin': { category: 'Physical' },
    'Sand Attack': { category: 'Special' },
    'Sand Tomb': { category: 'Special' },
    'Scary Face': { category: 'Special' },
    'Sky Uppercut': { isPunch: true, category: 'Physical' },
    'Solar Beam': { category: 'Special' },
    'Spite': { category: 'Special' },
    Struggle: { category: 'Physical', struggleRecoil: true },
    Submission: { category: 'Physical' },
    Surf: { target: 'allAdjacent', category: 'Special' },
    Tackle: { category: 'Physical' },
    'Tail Whip': { category: 'Physical' },
    Thrash: { category: 'Physical' },
    Thunder: { category: 'Special' },
    Twineedle: { category: 'Physical' },
    Twister: { category: 'Special' },
    Uproar: { category: 'Special' },
    'Volt Tackle': { category: 'Physical' },
    Whirlpool: { category: 'Special' },
    'Air Cutter': { category: 'Special' },
    Blizzard: { category: 'Special' },
    'Body Slam': { category: 'Physical' },
    Bubble: { category: 'Special' },
    'Fire Blast': { category: 'Special' },
    Flamethrower: { category: 'Special' },
    'Heat Wave': { category: 'Special' },
    'Hydro Pump': { category: 'Special' },
    'Hyper Voice': { category: 'Special' },
    'Ice Beam': { category: 'Special' },
    Lick: { category: 'Physical' },
    'Meteor Mash': { isPunch: true, category: 'Physical' },
    Overheat: { category: 'Special', makesContact: false },
    'Poison Fang': { isBite: true, category: 'Physical' },
    'Rock Tomb': { category: 'Physical' },
    'Skull Bash': { category: 'Physical' },
    Smog: { category: 'Special' },
    Thunderbolt: { category: 'Special' },
    'Vine Whip': { category: 'Physical' },
    'Weather Ball': { category: 'Special' },
    'Ice Ball': { category: 'Physical' },
    Rollout: { category: 'Physical' },
    'Sheer Cold': { category: 'Special' },
    Aeroblast: { category: 'Special' },
    'Bone Club': { category: 'Physical' },
    Constrict: { category: 'Physical' },
    'Dizzy Punch': { isPunch: true, category: 'Physical' },
    'Dragon Rage': { category: 'Special' },
    'Faint Attack': { makesContact: true, category: 'Physical' },
    'Hyper Fang': { isBite: true, category: 'Physical' },
    'Karate Chop': { category: 'Physical' },
    'Luster Purge': { category: 'Special' },
    'Needle Arm': { category: 'Physical' },
    'Rolling Kick': { category: 'Physical' },
    'Sacred Fire': { category: 'Physical' },
    'Signal Beam': { category: 'Special' },
    'Silver Wind': { category: 'Special' },
    'Sonic Boom': { category: 'Special' },
    Acid: { category: 'Special' },
    'Aerial Ace': { category: 'Physical' },
    'Ancient Power': { category: 'Special', makesContact: false },
    Astonish: { category: 'Physical' },
    'Aurora Beam': { category: 'Special' },
    Bite: { isBite: true, category: 'Physical' },
    'Blast Burn': { category: 'Special' },
    'Blaze Kick': { category: 'Physical' },
    'Bubble Beam': { category: 'Special' },
    Confusion: { category: 'Special' },
    'Cross Chop': { category: 'Physical' },
    Crunch: { isBite: true, category: 'Physical' },
    'Tear Up': { category: 'Physical' },
    Cut: { category: 'Physical' },
    'Dragon Breath': { category: 'Special' },
    'Dragon Claw': { category: 'Physical' },
    'Drill Peck': { category: 'Physical' },
    'Dynamic Punch': { isPunch: true, category: 'Physical' },
    Ember: { category: 'Special' },
    Eruption: { category: 'Special' },
    'Fire Punch': { isPunch: true, category: 'Physical' },
    Fissure: { category: 'Special' },
    'Frenzy Plant': { category: 'Special' },
    Headbutt: { category: 'Physical' },
    'Horn Attack': { category: 'Physical' },
    'Horn Drill': { category: 'Physical', self: { boosts: { atk: -2} }, makesContact: true },
    'Hydro Cannon': { category: 'Special' },
    'Ice Punch': { isPunch: true, category: 'Physical' },
    'Icy Wind': { category: 'Special' },
    'Iron Tail': { category: 'Physical' },
    'Leaf Blade': { bp: 80, category: 'Physical' },
    'Mach Punch': { isPunch: true, category: 'Physical' },
    'Magical Leaf': { category: 'Special' },
    Megahorn: { category: 'Physical' },
    'Metal Claw': { category: 'Physical' },
    'Mud Shot': { category: 'Special' },
    'Mud-Slap': { category: 'Special' },
    'Night Shade': { category: 'Special' },
    Octazooka: { category: 'Special' },
    'Pay Day': { category: 'Physical' },
    'Poison Sting': { category: 'Physical' },
    'Poison Tail': { category: 'Physical' },
    Pound: { category: 'Physical' },
    'Powder Snow': { category: 'Special' },
    Psychic: { category: 'Special' },
    'Quick Attack': { category: 'Physical' },
    'Razor Leaf': { category: 'Physical' },
    'Rock Slide': { category: 'Physical' },
    'Rock Smash': { bp: 55, category: 'Physical' },
    'Rock Throw': { category: 'Physical' },
    Scratch: { category: 'Physical' },
    'Seismic Toss': { category: 'Physical' },
    'Shadow Ball': { category: 'Special' },
    'Shadow Punch': { isPunch: true, category: 'Physical' },
    'Shock Wave': { category: 'Special' },
    Slash: { category: 'Physical' },
    Sludge: { category: 'Special' },
    'Sludge Bomb': { category: 'Special' },
    Smokescreen: { category: 'Special' },
    'Spider Web': { category: 'Special' },
    'Steel Wing': { category: 'Physical' },
    Strength: { category: 'Physical' },
    'String Shot': { category: 'Special' },
    'Super Fang': { category: 'Physical' },
    Superpower: { category: 'Physical' },
    Swift: { category: 'Special' },
    'Thunder Punch': { isPunch: true, category: 'Physical' },
    'Thunder Shock': { category: 'Special' },
    'Tri Attack': { category: 'Special' },
    Waterfall: { category: 'Physical' },
    'Water Gun': { category: 'Special' },
    'Water Spout': { category: 'Special' },
    'Dual Wingbeat': { category: 'Physical' },
    'Zap Cannon': { bp: 80, category: 'Special' },
    'Brave Bird': {
        bp: 110,
        type: 'Flying',
        recoil: [1, 4],
        makesContact: true,
        category: 'Physical'
    },
    'Exorcism': {
        bp: 75,
        type: 'Ghost',
        category: 'Physical'
    },
    'Attract': {
        bp: 75,
        type: 'Ghost',
        category: 'Physical'
    },
    'Titan Jaw': {
        bp: 85,
        type: 'Steel',
        category: 'Physical'
    },
    'Frustration': {
        bp: 85,
        type: 'Steel',
        category: 'Physical'
    },
    'Crush': {
        bp: 70,
        type: 'Normal',
        category: 'Physical'
    },
    'Teeter Dance': {
        bp: 70,
        type: 'Normal',
        category: 'Physical'
    },
    'Ambush': {
        bp: 70,
        type: 'Dark',
        category: 'Physical'
    },
    'Odor Sleuth': {
        bp: 70,
        type: 'Dark',
        category: 'Physical'
    },
    'Psychic Fangs': {
        bp: 80,
        type: 'Psychic',
        category: 'Physical'
    },
    'Grudge': {
        bp: 80,
        type: 'Psychic',
        category: 'Physical'
    },
    'Chilly Tempest': {
        bp: 85,
        type: 'Flying',
        category: 'Special'
    },
    'Flatter': {
        bp: 80,
        type: 'Flying',
        category: 'Special'
    },
    'Ascending Wind': {
        bp: 70,
        type: 'Flying',
        category: 'Special'
    },
    'Block': {
        bp: 65,
        type: 'Flying',
        category: 'Special'
    },
    'Metal Chips': {
        bp: 75,
        type: 'Steel',
        category: 'Special'
    },
    'Dive': {
        bp: 75,
        type: 'Steel',
        category: 'Special'
    },
    'Bulldoze': {
        bp: 70,
        type: 'Ground',
        category: 'Physical'
    },
    'Helping Hand': {
        bp: 70,
        type: 'Ground',
        category: 'Physical'
    },
    'Snowslide': {
        bp: 85,
        type: 'Ice',
        category: 'Physical'
    },
    'Endeavor': {
        bp: 85,
        type: 'Ice',
        category: 'Physical'
    },
    'Inferno Slide': {
        bp: 60,
        type: 'Fire',
        category: 'Physical'
    },
    'Spectral Vortex': {
        bp: 50,
        type: 'Ghost',
        category: 'Special'
    },
    'Chilly Crash': {
        bp: 50,
        type: 'Ice',
        category: 'Physical'
    },
    'Terraforming': {
        bp: 95,
        type: 'Ground',
        category: 'Special'
    },
    'Trick': {
        bp: 95,
        type: 'Ground',
        category: 'Special'
    },
    'Rust Storm': {
        bp: 95,
        type: 'Steel',
        category: 'Special'
    },
    'Detect': {
        bp: 90,
        type: 'Steel',
        category: 'Special'
    },
    'Techno Blast': {
        bp: 105,
        type: 'Normal',
        category: 'Special'
    },
    'Skill Swap': {
        bp: 100,
        type: 'Normal',
        category: 'Special'
    },
    'Phantasm': {
        bp: 65,
        type: 'Ghost',
        category: 'Special'
    },
    'Taunt': {
        bp: 65,
        type: 'Ghost',
        category: 'Special'
    },
    'Bedrock Crush': {
        bp: 80,
        type: 'Rock',
        category: 'Special'
    },
    'Snatch': {
        bp: 80,
        type: 'Rock',
        category: 'Special'
    },
    'Nightfall': {
        bp: 70,
        type: 'Dark',
        category: 'Special'
    },
    'Tickle': {
        bp: 65,
        type: 'Dark',
        category: 'Special'
    },
    'Wave Crash': {
        bp: 105,
        type: 'Water',
        makesContact: true,
        recoil: [1, 4],
        category: 'Physical'
    },
    'Spore': {
        bp: 105,
        type: 'Water',
        makesContact: true,
        recoil: [1, 4],
        category: 'Physical'
    },
    'Bug Bite': {
        bp: 55,
        type: 'Bug',
        makesContact: true,
        category: 'Physical'
    },
    'Sharp Pecker': {
        bp: 100,
        type: 'Flying',
        makesContact: true,
        category: 'Physical'
    },
    'Swallow': {
        bp: 100,
        type: 'Flying',
        makesContact: true,
        category: 'Physical'
    },
    'Acid Downpour': {
        bp: 85,
        type: 'Poison',
        makesContact: false,
        category: 'Special'
    },
    'Refresh': {
        bp: 85,
        type: 'Poison',
        makesContact: false,
        category: 'Special'
    },
    'Drain Punch': {
        bp: 60,
        type: 'Fighting',
        drain: [1, 2],
        makesContact: true,
        isPunch: true,
        category: 'Physical'
    },
    'Dragon Chop': {
        bp: 55,
        category: 'Physical',
        makesContact: true,
        type: 'Dragon'
    },
    'Wake-Up Slap': {
        bp: 55,
        category: 'Physical',
        makesContact: true,
        type: 'Dragon'
    },
    'Plasma Touch': {
        bp: 55,
        category: 'Physical',
        type: 'Electric',
        makesContact: true
    },
    'Smelling Salts': {
        bp: 55,
        category: 'Physical',
        type: 'Electric',
        makesContact: true
    },
    'Destruction': {
        bp: 70,
        category: 'Special',
        type: 'Fighting',
        makesContact: false
    },
    'Spit Up': {
        bp: 65,
        category: 'Special',
        type: 'Fighting',
        makesContact: false
    },
    'Baneful Sting': {
        bp: 85,
        category: 'Physical',
        type: 'Poison',
        makesContact: true
    },
    'Imprison': {
        bp: 85,
        category: 'Physical',
        type: 'Poison',
        makesContact: true
    },
    'Electro Shove': {
        bp: 70,
        category: 'Physical',
        type: 'Electric',
        makesContact: true
    },
    'Beat Up': {
        bp: 70,
        category: 'Physical',
        type: 'Electric',
        makesContact: true
    },
    'Fire Fang': {
        bp: 75,
        type: 'Fire',
        makesContact: true,
        isBite: true,
        category: 'Physical'
    },
    'Flare Blitz': {
        bp: 120,
        type: 'Fire',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
    },
    'Fiery Fury': {
        bp: 85,
        type: 'Dragon',
        recoil: [1, 3],
        makesContact: false,
        category: 'Special'
    },
    'Future Sight': {
        bp: 85,
        type: 'Dragon',
        recoil: [1, 3],
        makesContact: false,
        category: 'Special'
    },
    'Frost Drain': {
        bp: 80,
        type: 'Ice',
        category: 'Special',
        drain: [1, 2]
    },
    'Captivate': {
        bp: 80,
        type: 'Ice',
        category: 'Special',
        drain: [1, 2]
    },
    'Frozen Present': {
        bp: 70,
        type: 'Ice',
        category: 'Special'
    },
    'Present': {
        bp: 70,
        type: 'Ice',
        category: 'Special'
    },
    'Head Smash': {
        bp: 120,
        type: 'Rock',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
    },
    'Heal Order': { bp: 0, type: 'Bug' },
    'Heavy Storm': { bp: 115, type: 'Flying', category: 'Special' },
    'Defog': { bp: 110, type: 'Flying', category: 'Special' },
    'Magma Storm': { bp: 95, type: 'Fire', category: 'Special' },
    'Magnet Rise': { bp: 0, type: 'Electric' },
    'Metal Burst': { bp: 0, type: 'Steel', category: 'Physical' },
    'Meteor Beam': {
        bp: 120,
        category: 'Special',
        type: 'Rock'
    },
    'Memento': {
        bp: 120,
        category: 'Special',
        type: 'Rock'
    },
    'Meteor Impact': {
        bp: 95,
        category: 'Special',
        type: 'Rock'
    },
    'Judgment': {
        bp: 95,
        category: 'Special',
        type: 'Rock'
    },
    'Lightning Storm': {
        bp: 100,
        category: 'Special',
        type: 'Electric'
    },
    'Stockpile': {
        bp: 95,
        category: 'Special',
        type: 'Electric'
    },
    'Mystical Mist': { bp: 0, type: 'Ice' },
    'Mist': { bp: 0, type: 'Ice' },
    'Napalm Strike': {
        bp: 75,
        type: 'Poison',
        category: 'Special'
    },
    'Gastro Acid': {
        bp: 75,
        type: 'Poison',
        category: 'Special'
    },
    'Natural Gift': { bp: 75, type: 'Grass', category: 'Special' },
    Pluck: {
        bp: 65,
        type: 'Flying',
        makesContact: true,
        category: 'Physical'
    },
    Braindrain: {
        bp: 65,
        type: 'Psychic',
        category: 'Special',
        drain: [1, 2]
    },
    Psybeam: {
        bp: 65,
        type: 'Psychic',
        category: 'Special',
        drain: [1, 2]
    },
    Roost: { bp: 0, type: 'Flying' },
    'Shrill Noise': {
        bp: 55,
        category: 'Special',
        type: 'Steel'
    },
    'Uproar': {
        bp: 55,
        category: 'Special',
        type: 'Steel'
    },
    'Skitter Smack': {
        bp: 55,
        type: 'Bug',
        category: 'Physical',
        makesContact: true,
        secondaries: true
    },
    'Rage': {
        bp: 55,
        type: 'Bug',
        category: 'Physical',
        makesContact: true,
        secondaries: true
    },
    'Spacial Rupture': {
        bp: 110,
        category: 'Physical',
        type: 'Dragon'
    },
    'Spacial Rend': {
        bp: 105,
        category: 'Physical',
        type: 'Dragon'
    },
    'Spike Barrage': { bp: 40, type: 'Steel', category: 'Special', multihit: 2 },
    'Spike Cannon': { bp: 40, type: 'Steel', category: 'Special', multihit: 2 },
    'Stealth Rock': { bp: 0, type: 'Rock' },
    'Stone Barrage': { bp: 40, type: 'Rock', category: 'Special', multihit: 2 },
    'Rock Blast': { bp: 40, type: 'Rock', category: 'Special', multihit: 2 },
    'Rusty Swipes': { bp: 40, type: 'Steel', category: 'Physical', multihit: 2 },
    'Lock-On': { bp: 40, type: 'Steel', category: 'Physical', multihit: 2 },
    'Acid Darts': { bp: 45, type: 'Poison', category: 'Special', multihit: 2 },
    'Safeguard': { bp: 45, type: 'Poison', category: 'Special', multihit: 2 },
    'Boulder Drop': {
        bp: 60,
        category: 'Special',
        type: 'Rock'
    },
    'Barrage': {
        bp: 60,
        category: 'Special',
        type: 'Rock'
    },
    'Sucker Punch': {
        bp: 75,
        type: 'Dark',
        priority: 1,
        makesContact: true,
        category: 'Physical'
    },
    Tailwind: { bp: 60, type: 'Flying', category: 'Special' },
    'Toxic Spikes': { bp: 0, type: 'Poison' },
    'Trick Room': { bp: 0, type: 'Psychic' },
    'U-Turn': {
        bp: 60,
        type: 'Bug',
        makesContact: true,
        category: 'Physical'
    },
    'Venom Bash': {
        bp: 150,
        type: 'Poison',
        makesContact: true,
        category: 'Physical'
    },
    'Conversion 2': {
        bp: 150,
        type: 'Poison',
        makesContact: true,
        category: 'Physical'
    },
    'Wood Hammer': {
        bp: 125,
        type: 'Grass',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
    },
    'Air Slash': { bp: 75, type: 'Flying', category: 'Special' },
    'Aura Sphere': { bp: 85, type: 'Fighting', category: 'Special' },
    'Bug Buzz': { bp: 115, type: 'Bug', isSound: true, category: 'Special' },
    'Draco Meteor': { bp: 120, type: 'Dragon', category: 'Special', recoil: [1, 3] },
    'Dragon Pulse': { bp: 80, type: 'Dragon', category: 'Special' },
    'Dragon Rush': {
        bp: 140,
        type: 'Dragon',
        makesContact: true,
        category: 'Physical'
    },
    'Drill Run': {
        bp: 90,
        type: 'Ground',
        makesContact: true,
        category: 'Physical'
    },
    'Peck': {
        bp: 90,
        type: 'Ground',
        makesContact: true,
        category: 'Physical'
    },
    'Phantom Force': {
        bp: 100,
        type: 'Ghost',
        makesContact: true,
        category: 'Physical'
    },
    'Howl': {
        bp: 100,
        type: 'Ghost',
        makesContact: true,
        category: 'Physical'
    },
    'Pheromone Gale': {
        bp: 100,
        type: 'Bug',
        makesContact: false,
        category: 'Special'
    },
    'Flail': {
        bp: 105,
        type: 'Bug',
        makesContact: false,
        category: 'Special'
    },
    'Egg Impact': {
        bp: 100,
        type: 'Grass',
        category: 'Special'
    },
    'Egg Bomb': {
        bp: 100,
        type: 'Grass',
        category: 'Special'
    },
    'Energy Ball': { bp: 85, type: 'Grass', category: 'Special' },
    'Gunk Shot': { bp: 100, type: 'Poison', category: 'Special' },
    'Leaf Storm': { bp: 130, type: 'Grass', self: { boosts: { spa: -2 } }, category: 'Special' },
    'Power Gem': { bp: 80, type: 'Rock', category: 'Special' },
    'Psycho Shift': { bp: 0, type: 'Psychic' },
    'Dark Void': { bp: 0, type: 'Dark', target: 'allAdjacentFoes' },
    'Narcotic Spore': { bp: 0, type: 'Bug'},
    'Bone Rush': { bp: 0, type: 'Bug'},
    'Sturdy Roots': { bp: 0, type: 'Grass'},
    'Perish Song': { bp: 0, type: 'Grass'},
    'Aqua Ring': { bp: 0, type: 'Water'},
    'Grass Knot': {
        bp: 70,
        type: 'Grass',
        makesContact: true,
        category: 'Special'
    },
    Judgement: { bp: 90, type: 'Normal', category: 'Special' },
    'Heart Swap': { bp: 90, type: 'Normal', category: 'Special' },
    'Magnet Bomb': { bp: 85, type: 'Steel', category: 'Physical' },
    'Mirror Shot': { bp: 75, type: 'Steel', category: 'Special' },
    'Mud Bomb': { bp: 70, type: 'Ground', category: 'Special' },
    'Ominous Wind': { bp: 75, type: 'Ghost', category: 'Special' },
    Punishment: {
        bp: 130,
        type: 'Dark',
        makesContact: true,
        self: { boosts: { atk: -2} },
        category: 'Physical'
    },
    'Roar of Time': { bp: 90, type: 'Dragon', category: 'Special' },
    'Rock Climb': {
        bp: 80,
        type: 'Rock',
        makesContact: true,
        category: 'Physical'
    },
    'Seed Flare': { bp: 75, type: 'Grass', category: 'Special' },
    'Aqua Jet': {
        bp: 50,
        type: 'Water',
        priority: 1,
        makesContact: true,
        category: 'Physical'
    },
    'Aqua Tail': {
        bp: 85,
        type: 'Water',
        makesContact: true,
        category: 'Physical'
    },
    'Assault Order': { bp: 85, type: 'Bug', category: 'Special' },
    'Attack Order': { bp: 85, type: 'Bug', category: 'Special' },
    'Blazing Bash': {
        bp: 85,
        type: 'Fire',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
    },
    'Mean Look': {
        bp: 85,
        type: 'Fire',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
    },
    'Bullet Punch': {
        bp: 55,
        type: 'Steel',
        priority: 1,
        makesContact: true,
        isPunch: true,
        category: 'Physical'
    },
    'Charge Beam': { bp: 50, type: 'Electric', category: 'Special' },
    'Charged Water': {
        bp: 70,
        category: 'Special',
        type: 'Water'
    },
    'Charge': {
        bp: 70,
        category: 'Special',
        type: 'Water'
    },
    'Close Combat': {
        bp: 110,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical'
    },
    'Dark Hole': {
        bp: 115,
        type: 'Dark',
        category: 'Special'
    },
    'Double Hit': {
        bp: 110,
        type: 'Dark',
        category: 'Special'
    },
    'Counter Strike': {
        bp: 95,
        type: 'Fighting',
        makesContact: true,
        category: 'Special'
    },
    'Revenge': {
        bp: 95,
        type: 'Fighting',
        makesContact: true,
        category: 'Special'
    },
    'Cross Poison': {
        bp: 70,
        type: 'Poison',
        makesContact: true,
        category: 'Physical'
    },
    'Dark Pulse': { bp: 85, type: 'Dark', category: 'Special' },
    'Defend Order': { bp: 0, type: 'Bug' },
    Discharge: {
        bp: 70,
        type: 'Electric',
        target: 'allAdjacent',
        category: 'Special'
    },
    'Tectonic Shift': { bp: 80, type: 'Ground', category: 'Special' },
    'Earth Power': { bp: 80, type: 'Ground', category: 'Special' },
    'Flash Cannon': { bp: 70, type: 'Steel', category: 'Special' },
    'Focus Blast': { bp: 100, type: 'Fighting', category: 'Special' },
    'Force Push': {
        bp: 60,
        type: 'Fighting',
        makesContact: true,
        category: 'Special'
    },
    'Vital Throw': {
        bp: 55,
        type: 'Fighting',
        makesContact: true,
        category: 'Special'
    },
    'Foul Water': {
        bp: 75,
        category: 'Special',
        type: 'Water'
    },
    'Muddy Water': {
        bp: 75,
        category: 'Special',
        type: 'Water'
    },
    'Boulder Fling': {
        bp: 90,
        category: 'Special',
        recoil: [1, 4],
        type: 'Rock'
    },
    'Splash': {
        bp: 90,
        category: 'Special',
        recoil: [1, 4],
        type: 'Rock'
    },
    'Pollen Puff': {
        bp: 85,
        category: 'Special',
        type: 'Bug'
    },
    'Follow Me': {
        bp: 80,
        category: 'Special',
        type: 'Bug'
    },
    'Bolt Strike': {
        bp: 105,
        category: 'Physical',
        makesContact: true,
        type: 'Electric'
    },
    'Worry Seed': {
        bp: 105,
        category: 'Physical',
        makesContact: true,
        type: 'Electric'
    },
    'Freeze Strike': {
        bp: 80,
        type: 'Ice',
        makesContact: true,
        category: 'Physical'
    },
    'Feint': {
        bp: 80,
        type: 'Ice',
        makesContact: true,
        category: 'Physical'
    },
    'Giga Impact': {
        bp: 95,
        type: 'Steel',
        makesContact: true,
        category: 'Physical'
    },
    'Splish Splash': {
        bp: 70,
        type: 'Water',
        makesContact: true,
        category: 'Physical'
    },
    'Camouflage': {
        bp: 70,
        type: 'Water',
        makesContact: true,
        category: 'Physical'
    },
    'Hammer Arm': {
        bp: 90,
        type: 'Fighting',
        makesContact: true,
        isPunch: true,
        category: 'Physical'
    },
    'Hyper Rest': {
        bp: 150,
        type: 'Normal',
        category: 'Physical',
        secondaries: true
    },
    'Explosion': {
        bp: 150,
        type: 'Normal',
        category: 'Physical',
        secondaries: true
    },
    'Ice Burn': {
        bp: 100,
        type: 'Ice',
        category: 'Special',
        secondaries: true
    },
    'Avalanche': {
        bp: 95,
        type: 'Ice',
        category: 'Special',
        secondaries: true
    },
    'Ice Fang': {
        bp: 75,
        type: 'Ice',
        makesContact: true,
        isBite: true,
        category: 'Physical'
    },
    'Ice Shard': { bp: 55, type: 'Ice', priority: 1, category: 'Physical' },
    'Iron Head': {
        bp: 80,
        type: 'Steel',
        makesContact: true,
        category: 'Physical'
    },
    'Lava Plume': {
        bp: 70,
        type: 'Fire',
        target: 'allAdjacent',
        category: 'Special'
    },
    'Liquid Steel': {
        bp: 105,
        category: 'Special',
        type: 'Steel'
    },
    'Foresight': {
        bp: 95,
        category: 'Special',
        type: 'Steel'
    },
    'Mind Crush': {
        bp: 110,
        type: 'Psychic',
        category: 'Special'
    },
    'Extrasensory': {
        bp: 105,
        type: 'Psychic',
        category: 'Special'
    },
    'Mind Strike': {
        bp: 85,
        type: 'Psychic',
        makesContact: true,
        category: 'Physical'
    },
    'Reversal': {
        bp: 85,
        type: 'Psychic',
        makesContact: true,
        category: 'Physical'
    },
    'Nasty Plot': { bp: 0, type: 'Dark' },
    'Night Slash': {
        bp: 90,
        type: 'Dark',
        makesContact: true,
        category: 'Physical'
    },
    'Disaster Strike': {
        bp: 110,
        type: 'Dark',
        makesContact: true,
        category: 'Physical'
    },
    'Snore': {
        bp: 110,
        type: 'Dark',
        makesContact: true,
        category: 'Physical'
    },
    'Poison Jab': {
        bp: 80,
        type: 'Poison',
        makesContact: true,
        category: 'Physical'
    },
    'Venom Touch': {
        bp: 55,
        type: 'Poison',
        makesContact: true,
        category: 'Physical'
    },
    'Assurance': {
        bp: 55,
        type: 'Poison',
        makesContact: true,
        category: 'Physical'
    },
    Poltergeist: {
        bp: 120,
        type: 'Ghost',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
    },
    Transform: {
        bp: 120,
        type: 'Ghost',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
    },
    'Power Whip': {
        bp: 110,
        type: 'Grass',
        makesContact: true,
        category: 'Physical'
    },
    'Power-Up Punch': {
        bp: 50,
        type: 'Fighting',
        makesContact: true,
        isPunch: true,
        category: 'Physical',
        secondaries: true
    },
    'Arm Thrust': {
        bp: 50,
        type: 'Fighting',
        makesContact: true,
        isPunch: true,
        category: 'Physical',
        secondaries: true
    },
    'Psycho Cut': { bp: 80, type: 'Psychic', category: 'Physical' },
    'Razor Shell': {
        bp: 95,
        type: 'Water',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    'Clamp': {
        bp: 95,
        type: 'Water',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    'Rock Polish': { bp: 0, type: 'Rock' },
    'Rock Wrecker': { bp: 105, type: 'Rock', category: 'Physical' },
    Scald: {
        bp: 70,
        type: 'Water',
        category: 'Special',
        secondaries: true
    },
    Brine: {
        bp: 70,
        type: 'Water',
        category: 'Special',
        secondaries: true
    },
    Scam: { bp: 50, type: 'Dark', category: 'Special' },
    Payback: { bp: 50, type: 'Dark', category: 'Special' },
    'Seed Bomb': { bp: 75, type: 'Grass', category: 'Physical' },
    'Shadow Claw': {
        bp: 75,
        type: 'Ghost',
        makesContact: true,
        category: 'Physical'
    },
    'Shadow Sneak': {
        bp: 50,
        type: 'Ghost',
        priority: 1,
        makesContact: true,
        category: 'Physical'
    },
    'Sinister Strike': {
        bp: 80,
        type: 'Ghost',
        makesContact: true,
        category: 'Physical',
        priority: 1
    },
    'Pursuit': {
        bp: 80,
        type: 'Ghost',
        makesContact: true,
        category: 'Physical',
        priority: 1
    },
    'Sleight Of Hand': {
        bp: 70,
        type: 'Psychic',
        category: 'Physical',
        makesContact: true
    },
    'Wring Out': {
        bp: 70,
        type: 'Psychic',
        category: 'Physical',
        makesContact: true
    },
    'Stone Edge': { bp: 110, type: 'Rock', category: 'Physical' },
    'Subzero Slam': {
        bp: 100,
        type: 'Ice',
        makesContact: true,
        category: 'Physical'
    },
    'Conversion': {
        bp: 100,
        type: 'Ice',
        makesContact: true,
        category: 'Physical'
    },
    'Thunder Fang': {
        bp: 75,
        type: 'Electric',
        makesContact: true,
        isBite: true,
        category: 'Physical'
    },
    'Umbral Arrival': {
        bp: 105,
        type: 'Dark',
        category: 'Special'
    },
    'Destiny Bond': {
        bp: 105,
        type: 'Dark',
        category: 'Special'
    },
    'Vacuum Swipe': {
        bp: 55,
        type: 'Psychic',
        priority: 1,
        category: 'Physical'
    },
    'Vacuum Wave': {
        bp: 50,
        type: 'Psychic',
        priority: 1,
        category: 'Physical'
    },
    'Volt Switch': {
        bp: 60,
        category: 'Special',
        type: 'Electric',
        makesContact: true
    },
    'Spark': {
        bp: 60,
        category: 'Special',
        type: 'Electric',
        makesContact: true
    },
    'H2O Absorption': {
        bp: 65,
        drain: [1, 2],
        category: 'Special',
        type: 'Water'
    },
    'Water Pulse': {
        bp: 65,
        drain: [1, 2],
        category: 'Special',
        type: 'Water'
    },
    'Wet Touch': {
        bp: 55,
        type: 'Water',
        makesContact: true,
        category: 'Physical'
    },
    'Facade': {
        bp: 55,
        type: 'Water',
        makesContact: true,
        category: 'Physical'
    },
    'Wild Charge': {
        bp: 95,
        type: 'Electric',
        recoil: [1, 4],
        makesContact: true,
        category: 'Physical'
    },
    'Gyro Ball': {
        bp: 90,
        type: 'Electric',
        recoil: [1, 4],
        makesContact: true,
        category: 'Physical'
    },
    'X-Scissor': {
        bp: 80,
        type: 'Bug',
        makesContact: true,
        category: 'Physical'
    },
    'Zen Headbutt': {
        bp: 100,
        type: 'Psychic',
        makesContact: true,
        category: 'Physical'
    },
        'Acidic Payback': {
        bp: 0,
        category: 'Physical',
        type: 'Poison'
    },
        'Double Team': {
        bp: 0,
        category: 'Physical',
        type: 'Poison'
    },
        'Condemnation': {
        bp: 90,
        category: 'Physical',
        type: 'Normal'
    },
        'Guard Swap': {
        bp: 90,
        category: 'Physical',
        type: 'Normal'
    },
        'Cyclone': {
        bp: 1,
        category: 'Special',
        type: 'Flying'
    },
        'Bide': {
        bp: 1,
        category: 'Special',
        type: 'Flying'
    },
        'Draconic Gale': {
        bp: 115,
        category: 'Special',
        type: 'Dragon'
    },
        'Double Kick': {
        bp: 110,
        category: 'Special',
        type: 'Dragon'
    },
        'Icky Trap': {
        bp: 55,
        category: 'Special',
        type: 'Bug'
    },
        'Nature Power': {
        bp: 55,
        category: 'Special',
        type: 'Bug'
    },
        'Uncover': {
        bp: 60,
        category: 'Special',
        type: 'Normal'
    },
        'Fake Tears': {
        bp: 60,
        category: 'Special',
        type: 'Normal'
    },
        'Pensive Tackle': {
        bp: 60,
        category: 'Physical',
        type: 'Psychic'
    },
        'Role Play': {
        bp: 55,
        category: 'Physical',
        type: 'Psychic'
    },
        'Accelegem': {
        bp: 60,
        category: 'Special',
        type: 'Rock'
    },
        'Baton Pass': {
        bp: 60,
        category: 'Special',
        type: 'Rock'
    },
        'Berserk': {
        bp: 80,
        category: 'Physical',
        type: 'Dragon'
    },
        'Encore': {
        bp: 80,
        category: 'Physical',
        type: 'Dragon'
    },
        'Terrifier': {
        bp: 70,
        category: 'Special',
        type: 'Dark'
    },
        'Sleep Talk': {
        bp: 70,
        category: 'Special',
        type: 'Dark'
    },
        'Chakra Push': {
        bp: 70,
        category: 'Physical',
        type: 'Psychic'
    },
        'Sketch': {
        bp: 70,
        category: 'Physical',
        type: 'Psychic'
    },
        'Sparks': {
        bp: 65,
        category: 'Physical',
        type: 'Electric'
    },
        'Self-Destruct': {
        bp: 65,
        category: 'Physical',
        type: 'Electric'
    },
        'Arcane Gambit': {
        bp: 70,
        category: 'Special',
        type: 'Fighting'
    },
        'Triple Kick': {
        bp: 70,
        category: 'Special',
        type: 'Fighting'
    },
        'Draconic Slam': {
        bp: 100,
        category: 'Physical',
        type: 'Dragon'
    },
        'Vise Grip': {
        bp: 100,
        category: 'Physical',
        type: 'Dragon'
    },
        'Even Ground': {
        bp: 0,
        category: 'Status',
        type: 'Ground'
    },
        'Low Kick': {
        bp: 0,
        category: 'Status',
        type: 'Ground'
    },
        'Flame Charge': {
        bp: 55,
        category: 'Physical',
        type: 'Fire'
    },
        'Flame Wheel': {
        bp: 50,
        category: 'Physical',
        type: 'Fire'
    },
        'Searing Blow': {
        bp: 70,
        category: 'Physical',
        type: 'Fire'
    },
        'Thief': {
        bp: 70,
        category: 'Physical',
        type: 'Fire'
    },
        'Fog Ball': {
        bp: 85,
        category: 'Special',
        type: 'Normal'
    },
        'Stomp': {
        bp: 85,
        category: 'Special',
        type: 'Normal'
    },
        'Silk Spin': {
        bp: 60,
        category: 'Physical',
        type: 'Bug'
    },
        'Power Trick': {
        bp: 60,
        category: 'Physical',
        type: 'Bug'
    },
        'Pyro Twist': {
        bp: 80,
        category: 'Physical',
        type: 'Fire'
    },
        'Trump Card': {
        bp: 80,
        category: 'Physical',
        type: 'Fire'
    },
        'Haunting': {
        bp: 70,
        category: 'Special',
        type: 'Ghost'
    },
        'Psycho Shift': {
        bp: 70,
        category: 'Special',
        type: 'Ghost'
    },
        'Glacial Twist': {
        bp: 80,
        category: 'Physical',
        type: 'Ice'
    },
        'Fling': {
        bp: 80,
        category: 'Physical',
        type: 'Ice'
    },
        'Sonic Missile': {
        bp: 60,
        category: 'Special',
        type: 'Steel'
    },
        'Embargo': {
        bp: 60,
        category: 'Special',
        type: 'Steel'
    },
        'Current Pursuit': {
        bp: 70,
        category: 'Physical',
        type: 'Water'
    },
        'Heal Block': {
        bp: 70,
        category: 'Physical',
        type: 'Water'
    },
        'Galactic Edge': {
        bp: 75,
        category: 'Physical',
        type: 'Psychic'
    },
        'Mega Kick': {
        bp: 75,
        category: 'Physical',
        type: 'Psychic'
    },
        'Horror Scream': {
        bp: 95,
        category: 'Special',
        type: 'Ghost'
    },
        'Bind': {
        bp: 95,
        category: 'Special',
        type: 'Ghost'
    },
        'Lightning Rush': {
        bp: 60,
        category: 'Physical',
        type: 'Electric'
    },
        'Jump Kick': {
        bp: 60,
        category: 'Physical',
        type: 'Electric'
    },
    'Hyper Beam': {
        bp: 110,
        type: 'Normal',
        recoil: [1, 4],
        category: 'Special'
     },
    'Reckless Peck': {
        bp: 80,
        type: 'Flying',
        recoil: [1, 4],
        makesContact: true,
        category: 'Physical'
     },
    'Assist': {
        bp: 75,
        type: 'Flying',
        recoil: [1, 4],
        makesContact: true,
        category: 'Physical'
     },
    'Combustion': {
        bp: 100,
        type: 'Fire',
        recoil: [1, 3],
        makesContact: false,
        category: 'Special'
     },
    'Wrap': {
        bp: 100,
        type: 'Fire',
        recoil: [1, 3],
        makesContact: false,
        category: 'Special'
     },
    'Battering Ram': {
        bp: 85,
        type: 'Rock',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
     },
    'Take Down': {
        bp: 85,
        type: 'Rock',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
     },
    'Distract': {
        bp: 55,
        type: 'Dark',
        makesContact: true,
        category: 'Physical'
     },
    'Razor Wind': {
        bp: 55,
        type: 'Dark',
        makesContact: true,
        category: 'Physical'
     },
    'Chi Pulse': {
        bp: 90,
        type: 'Fighting',
        makesContact: false,
        category: 'Special'
     },
    'Metronom': {
        bp: 90,
        type: 'Fighting',
        makesContact: false,
        category: 'Special'
     },
    'Jet Stream': {
        bp: 105,
        type: 'Flying',
        makesContact: false,
        category: 'Special'
     },
    'Substitute': {
        bp: 100,
        type: 'Flying',
        makesContact: false,
        category: 'Special'
     },
    'Psyray': {
        bp: 80,
        type: 'Psychic',
        makesContact: false,
        category: 'Special'
     },
    'Mist Ball': {
        bp: 80,
        type: 'Psychic',
        makesContact: false,
        category: 'Special'
     },
    'Incinerate': {
        bp: 70,
        type: 'Fire',
        makesContact: false,
        category: 'Special'
     },
    'Sky Attack': {
        bp: 70,
        type: 'Fire',
        makesContact: false,
        category: 'Special'
     },
    'Infection': {
        bp: 0,
        type: 'Bug',
        category: 'Status'
     },
    'Mind Reader': {
        bp: 0,
        type: 'Bug',
        category: 'Status'
     },
    'Heavy Slam': {
        bp: 105,
        type: 'Steel',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
     },
    'Roar': {
        bp: 100,
        type: 'Steel',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
     },
    'Headlong Rush': {
        bp: 105,
        type: 'Ground',
        recoil: [1, 4],
        makesContact: true,
        category: 'Physical'
    },
    'Mirror Move': {
        bp: 105,
        type: 'Ground',
        recoil: [1, 4],
        makesContact: true,
        category: 'Physical'
    },
    'Wrath': {
        bp: 75,
        type: 'Dragon',
        recoil: [1, 4],
        makesContact: true,
        category: 'Physical'
    },
    'Ingrain': {
        bp: 75,
        type: 'Dragon',
        recoil: [1, 4],
        makesContact: true,
        category: 'Physical'
    },
        'Misdirection': {
        bp: 50,
        category: 'Special',
        type: 'Psychic'
    },
        'Mimic': {
        bp: 50,
        category: 'Special',
        type: 'Psychic'
    },
        'Obliterate': {
        bp: 75,
        category: 'Special',
        type: 'Fighting'
    },
        'Whirlwind': {
        bp: 75,
        category: 'Special',
        type: 'Fighting'
    },
        'Parasite': {
        bp: 0,
        category: 'Status',
        type: 'Bug'
    },
        'Minimize': {
        bp: 0,
        category: 'Status',
        type: 'Bug'
    },
        'Power Reset': {
        bp: 75,
        category: 'Special',
        type: 'Fighting'
    },
        'Force Palm': {
        bp: 70,
        category: 'Special',
        type: 'Fighting'
    },
        'Scorching Sands': {
        bp: 70,
        category: 'Special',
        type: 'Ground'
    },
        'Slam': {
        bp: 70,
        category: 'Special',
        type: 'Ground'
    },
        'Scrap Steal': {
        bp: 60,
        drain: [1, 2],
        category: 'Physical',
        type: 'Steel'
    },
        'Mega Punch': {
        bp: 60,
        drain: [1, 2],
        category: 'Physical',
        type: 'Steel'
    },
        'Wyvery Blaze': {
        bp: 0,
        category: 'Status',
        type: 'Dragon'
    },
        'Disable': {
        bp: 0,
        category: 'Status',
        type: 'Dragon'
    }
};
var DPP = (0, util_1.extend)(true, {}, ADV, DPP_PATCH);
var LGPE_MOVES = [
    'Baddy Bad',
    'Bouncy Bubble',
    'Buzzy Buzz',
    'Freezy Frost',
    'Glitzy Glow',
    'Sappy Seed',
    'Sizzly Slide',
    'Sparkly Swirl',
    'Zippy Zap',
    'Floaty Fall',
    'Pika Papow',
    'Splishy Splash',
    'Veevee Volley',
];
try {
    for (var LGPE_MOVES_1 = __values(LGPE_MOVES), LGPE_MOVES_1_1 = LGPE_MOVES_1.next(); !LGPE_MOVES_1_1.done; LGPE_MOVES_1_1 = LGPE_MOVES_1.next()) {
        var m = LGPE_MOVES_1_1.value;
        delete SS[m];
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (LGPE_MOVES_1_1 && !LGPE_MOVES_1_1.done && (_a = LGPE_MOVES_1["return"])) _a.call(LGPE_MOVES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
exports.MOVES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS];
var Moves = (function () {
    function Moves(gen) {
        this.gen = gen;
    }
    Moves.prototype.get = function (id) {
        return MOVES_BY_ID[this.gen][id];
    };
    Moves.prototype[Symbol.iterator] = function () {
        var _a, _b, _i, id;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = [];
                    for (_b in MOVES_BY_ID[this.gen])
                        _a.push(_b);
                    _i = 0;
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3, 4];
                    id = _a[_i];
                    return [4, this.get(id)];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    };
    return Moves;
}());
exports.Moves = Moves;
var Move = (function () {
    function Move(name, data, gen) {
        this.kind = 'Move';
        this.id = (0, util_1.toID)(name);
        this.name = name;
        this.flags = {};
        if (data.makesContact)
            this.flags.contact = 1;
        if (data.isPunch)
            this.flags.punch = 1;
        if (data.isBite)
            this.flags.bite = 1;
        if (data.isBullet)
            this.flags.bullet = 1;
        if (data.isSound)
            this.flags.sound = 1;
        if (data.isPulse)
            this.flags.pulse = 1;
        (0, util_1.assignWithout)(this, data, Move.FLAGS);
        this.basePower = data.bp;
        if (data.zp)
            this.zMove = { basePower: data.zp };
        if (data.maxPower)
            this.maxMove = { basePower: data.maxPower };
        if (!this.category && gen >= 4)
            this.category = 'Status';
        if (this.struggleRecoil)
            delete this.recoil;
    }
    Move.FLAGS = new Set([
        'bp',
        'makesContact',
        'isPunch',
        'isBite',
        'isBullet',
        'isSound',
        'isPulse',
        'zp',
        'maxPower',
    ]);
    return Move;
}());
var MOVES_BY_ID = [];
var gen = 0;
try {
    for (var MOVES_1 = __values(exports.MOVES), MOVES_1_1 = MOVES_1.next(); !MOVES_1_1.done; MOVES_1_1 = MOVES_1.next()) {
        var moves = MOVES_1_1.value;
        var map = {};
        for (var move in moves) {
            var data = moves[move];
            var m = new Move(move, data, gen);
            map[m.id] = m;
        }
        MOVES_BY_ID.push(map);
        gen++;
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (MOVES_1_1 && !MOVES_1_1.done && (_b = MOVES_1["return"])) _b.call(MOVES_1);
    }
    finally { if (e_2) throw e_2.error; }
}
//# sourceMappingURL=moves.js.map