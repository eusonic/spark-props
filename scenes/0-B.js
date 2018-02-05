const {set} = require('../lib/setters')
    , {off, white, teal, lightTeal, gentleGreen} = require('../lib/colors')
    , {t1, t2, t3, t4, t5, t6, m1, m2, m3, m4, m5, all} = require('../lib/props')
    , delay = require('../lib/delay')
;



function letterAPulses(wait) {
  const length = 200;
  const space = 60;
  return function () {
    return [
      set([m3], {delay: wait, to: teal}),
      set([m3], {delay: wait + length, to: lightTeal}),

      set([t3, t4], {delay: wait + space * 1, to: teal}),
      set([t3, t4], {delay: wait + space * 1 + length, to: lightTeal}),

      set([m2, m4], {delay: wait + space * 2, to: teal}),
      set([m2, m4], {delay: wait + space * 2 + length, to: lightTeal}),

      set([t2, t5], {delay: wait + space * 3, to: teal}),
      set([t2, t5], {delay: wait + space * 3 + length, to: lightTeal}),

      set([m1, m5], {delay: wait + space * 4, to: teal}),
      set([m1, m5], {delay: wait + space * 4 + length, to: lightTeal}),

      set([t1, t6], {delay: wait + space * 5, to: teal}),
      set([t1, t6], {delay: wait + space * 5 + length, to: lightTeal}),
    ]
  }
}



module.exports = {



  // =========
  // beginning
  // =========

  // m0b3 -> first note
  'C3': [
    set(all, {delay: delay(90, 2), to: white}),
  ],

  // m1 -> first hit
  'C#3': [
    set([t1, t2, m1, m2], {delay: delay(90, 4), to: teal}),
    set([t1, t2, m1, m2], {delay: delay(90, 5.5), to: white}),
  ],

  // m2 -> nothing
  'D3': [],

  // m3 -> second hit
  'D#3': [
    set([t5, t6, m4, m5], {delay: delay(90, 0.75), to: teal}),
    set([t5, t6, m4, m5], {delay: delay(90, 2.25), to: white}),
  ],

  // m4 -> third hit
  'E3': [
    set([t1, t2, t3, m1, m2, m3], {delay: delay(90, 0.75), to: teal}),
    set([t1, t2, t3, m1, m2, m3], {delay: delay(90, 2.25), to: white}),
  ],

  // m5 - > fourth hit and fith hit (all)
  'F3': [
    set([t4, t5, t6, m3, m4, m5], {delay: delay(90, 1.5), to: teal}),
    set([t4, t5, t6, m3, m4, m5], {delay: delay(90, 3), to: white}),
    set(all, {delay: delay(90, 3.75), to: teal}),
  ],

  // m6-7 -> letter A first hit
  'F#3': [
    set(all, {delay: delay(90, 5), to: lightTeal}),
    letterAPulses(delay(90, 5))
  ],



  // ========
  // letter A
  // ========

  // m8 -> nothing
  'G3': [],

  // m9 -> second hit
  'G#3': [
    letterAPulses(delay(90, 3.75))
  ],

  // m10 -> nothing
  'A3': [],

  // m11 -> nothhing
  'A#3': [],

  // m12 -> third hit
  'B3': [
    letterAPulses(delay(90, 1.5))
  ],

  // m13 -> nothing
  'C4': [],

  // m13 -> fourth hit
  'C#4': [
    letterAPulses(delay(90, 2.75))
  ],

  // m15 -> nothing
  'D4': [],

  // m16 -> letter B
  'D#4': [
    set(all, {delay: delay(90, 3), to: gentleGreen}),
  ],



}