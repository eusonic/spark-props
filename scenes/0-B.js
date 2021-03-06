const {set, flash, fade} = require('../lib/setters')
    , {off, white, teal, lightTeal, gentleGreen} = require('../lib/colors')
    , {t1, t2, t3, t4, t5, t6, m1, m2, m3, m4, m5, all, randomAll, towers, mallets} = require('../lib/props')
    , delay = require('../lib/delay')
;



function letterAPulses(wait) {
  return function () {
    return flash(all, {delay: wait, duration: delay(90, 0.5), from: teal, to: lightTeal});
  }
}

function openingFlashOut(wait, gap) {
  return randomAll.map(function(prop, i) {
    return set([prop], {delay: wait + gap * i, to: lightTeal});
  })
}

var sweepSpeed = 0.2

module.exports = {



  // =========
  // beginning
  // =========

  // m0b3 -> first note
  'C3': [
    set(all, {delay: delay(90, 2), to: teal}),
    openingFlashOut(delay(90, 3), delay(90, 0.15)),
  ],

  // m1 -> first hit
  'C#3': [
    flash([t1, t2], {delay: delay(90, 4 + 0),    duration: delay(90, 0.5), from: teal, to: lightTeal}),

    flash([m1], {delay: delay(90, 4 + sweepSpeed * 0), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m1], {delay: delay(90, 4 + sweepSpeed * 1), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: teal}),
    flash([m1], {delay: delay(90, 4 + sweepSpeed * 2), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m1], {delay: delay(90, 4 + sweepSpeed * 3), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: lightTeal}),

    flash([m2], {delay: delay(90, 4 + sweepSpeed * 2), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m2], {delay: delay(90, 4 + sweepSpeed * 3), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: teal}),
    flash([m2], {delay: delay(90, 4 + sweepSpeed * 4), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m2], {delay: delay(90, 4 + sweepSpeed * 5), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: lightTeal}),

    flash([m3], {delay: delay(90, 4 + sweepSpeed * 4), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m3], {delay: delay(90, 4 + sweepSpeed * 5), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: teal}),
    flash([m3], {delay: delay(90, 4 + sweepSpeed * 6), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m3], {delay: delay(90, 4 + sweepSpeed * 7), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: lightTeal}),

    flash([m4], {delay: delay(90, 4 + sweepSpeed * 6), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m4], {delay: delay(90, 4 + sweepSpeed * 7), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: teal}),
    flash([m4], {delay: delay(90, 4 + sweepSpeed * 8), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m4], {delay: delay(90, 4 + sweepSpeed * 9), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: lightTeal}),

    flash([m5], {delay: delay(90, 4 + sweepSpeed * 8), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m5], {delay: delay(90, 4 + sweepSpeed * 9), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: teal}),
    flash([m5], {delay: delay(90, 4 + sweepSpeed * 10), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m5], {delay: delay(90, 4 + sweepSpeed * 11), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: lightTeal}),
  ],

  // m2 -> nothing
  'D3': [
    flash([t6, t5],     {delay: delay(90, 3.75 + 0),    duration: delay(90, 0.5), from: teal, to: lightTeal}),
    
    flash([m5], {delay: delay(90, 3.75 + sweepSpeed * 0), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m5], {delay: delay(90, 3.75 + sweepSpeed * 1), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: teal}),
    flash([m5], {delay: delay(90, 3.75 + sweepSpeed * 2), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m5], {delay: delay(90, 3.75 + sweepSpeed * 3), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: lightTeal}),

    flash([m4], {delay: delay(90, 3.75 + sweepSpeed * 2), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m4], {delay: delay(90, 3.75 + sweepSpeed * 3), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: teal}),
    flash([m4], {delay: delay(90, 3.75 + sweepSpeed * 4), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m4], {delay: delay(90, 3.75 + sweepSpeed * 5), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: lightTeal}),

    flash([m3], {delay: delay(90, 3.75 + sweepSpeed * 4), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m3], {delay: delay(90, 3.75 + sweepSpeed * 5), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: teal}),
    flash([m3], {delay: delay(90, 3.75 + sweepSpeed * 6), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m3], {delay: delay(90, 3.75 + sweepSpeed * 7), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: lightTeal}),

    flash([m2], {delay: delay(90, 3.75 + sweepSpeed * 6), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m2], {delay: delay(90, 3.75 + sweepSpeed * 7), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: teal}),
    flash([m2], {delay: delay(90, 3.75 + sweepSpeed * 8), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m2], {delay: delay(90, 3.75 + sweepSpeed * 9), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: lightTeal}),

    flash([m1], {delay: delay(90, 3.75 + sweepSpeed * 8), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m1], {delay: delay(90, 3.75 + sweepSpeed * 8), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: teal}),
    flash([m1], {delay: delay(90, 3.75 + sweepSpeed * 10), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m1], {delay: delay(90, 3.75 + sweepSpeed * 11), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: lightTeal}),
  ],

  // m3 -> second hit
  'D#3': [
    flash([t1, t2, t3],     {delay: delay(90, 3.75 + 0),    duration: delay(90, 0.5), from: teal, to: lightTeal}),

    flash([m1], {delay: delay(90, 3.75 + sweepSpeed * 0), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m1], {delay: delay(90, 3.75 + sweepSpeed * 1), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: teal}),
    flash([m1], {delay: delay(90, 3.75 + sweepSpeed * 2), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m1], {delay: delay(90, 3.75 + sweepSpeed * 3), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: lightTeal}),

    flash([m2], {delay: delay(90, 3.75 + sweepSpeed * 2), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m2], {delay: delay(90, 3.75 + sweepSpeed * 3), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: teal}),
    flash([m2], {delay: delay(90, 3.75 + sweepSpeed * 4), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m2], {delay: delay(90, 3.75 + sweepSpeed * 5), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: lightTeal}),

    flash([m3], {delay: delay(90, 3.75 + sweepSpeed * 4), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m3], {delay: delay(90, 3.75 + sweepSpeed * 5), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: teal}),
    flash([m3], {delay: delay(90, 3.75 + sweepSpeed * 6), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m3], {delay: delay(90, 3.75 + sweepSpeed * 7), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: lightTeal}),

    flash([m4], {delay: delay(90, 3.75 + sweepSpeed * 6), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m4], {delay: delay(90, 3.75 + sweepSpeed * 7), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: teal}),
    flash([m4], {delay: delay(90, 3.75 + sweepSpeed * 8), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m4], {delay: delay(90, 3.75 + sweepSpeed * 9), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: lightTeal}),

    flash([m5], {delay: delay(90, 3.75 + sweepSpeed * 8), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m5], {delay: delay(90, 3.75 + sweepSpeed * 9), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: teal}),
    flash([m5], {delay: delay(90, 3.75 + sweepSpeed * 10), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m5], {delay: delay(90, 3.75 + sweepSpeed * 11), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: lightTeal}),
  ],

  // m4 -> third hit
  'E3': [
    flash([t6, t5, t4],     {delay: delay(90, 4.5 + 0),    duration: delay(90, 0.5), from: teal, to: lightTeal}),

    flash([m5], {delay: delay(90, 4.5 + sweepSpeed * 0), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m5], {delay: delay(90, 4.5 + sweepSpeed * 1), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: teal}),
    flash([m5], {delay: delay(90, 4.5 + sweepSpeed * 2), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m5], {delay: delay(90, 4.5 + sweepSpeed * 3), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: lightTeal}),

    flash([m4], {delay: delay(90, 4.5 + sweepSpeed * 2), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m4], {delay: delay(90, 4.5 + sweepSpeed * 3), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: teal}),
    flash([m4], {delay: delay(90, 4.5 + sweepSpeed * 4), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m4], {delay: delay(90, 4.5 + sweepSpeed * 5), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: lightTeal}),

    flash([m3], {delay: delay(90, 4.5 + sweepSpeed * 4), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m3], {delay: delay(90, 4.5 + sweepSpeed * 5), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: teal}),
    flash([m3], {delay: delay(90, 4.5 + sweepSpeed * 6), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m3], {delay: delay(90, 4.5 + sweepSpeed * 7), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: lightTeal}),

    flash([m2], {delay: delay(90, 4.5 + sweepSpeed * 6), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m2], {delay: delay(90, 4.5 + sweepSpeed * 7), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: teal}),
    flash([m2], {delay: delay(90, 4.5 + sweepSpeed * 8), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m2], {delay: delay(90, 4.5 + sweepSpeed * 9), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: lightTeal}),

    flash([m1], {delay: delay(90, 4.5 + sweepSpeed * 8), duration: delay(90, sweepSpeed/2), from: [lightTeal, lightTeal, lightTeal, teal], to: [lightTeal, lightTeal, teal, teal]}),
    flash([m1], {delay: delay(90, 4.5 + sweepSpeed * 8), duration: delay(90, sweepSpeed/2), from: [lightTeal, teal, teal, teal], to: teal}),
    flash([m1], {delay: delay(90, 4.5 + sweepSpeed * 10), duration: delay(90, sweepSpeed/2), from: [teal, teal, teal, lightTeal], to: [teal, teal, lightTeal, lightTeal]}),
    flash([m1], {delay: delay(90, 4.5 + sweepSpeed * 11), duration: delay(90, sweepSpeed/2), from: [teal, lightTeal, lightTeal, lightTeal], to: lightTeal}),
  ],

  // m5 - > fourth hit and fith hit (all)
  'F3': [
  ],

  // m6-7 -> letter A first hit
  'F#3': [
    flash([m3], {delay: delay(90, 5), duration: delay(90, 0.5), from: white, to: teal}),
    set([m1,m2,m4,m5], {delay: delay(90, 5), to: lightTeal}),
    set(towers, {delay: delay(90, 5), to: lightTeal}),
  ],



  // ========
  // letter A
  // ========

  // m8 -> nothing
  'G3': [
    flash([m2,m3,m4], {delay: delay(90, 3), duration: delay(90, 0.5), from: white, to: teal}),
    set([m1,m5], {delay: delay(90, 3), to: lightTeal}),
    set(towers, {delay: delay(90, 3), to: lightTeal}),
  ],

  // m9 -> nothing
  'G#3': [
    flash(mallets, {delay: delay(90, 3.75), duration: delay(90, 0.5), from: white, to: teal}),
    set(towers, {delay: delay(90, 3.75), to: lightTeal}),
  ],

  // m10 -> second hit
  'A3': [],

  // m11 -> nothhing
  'A#3': [],

  // m12 -> third hit
  'B3': [
    flash(towers, {delay: delay(90, 1.5), duration: delay(90, 0.5), from: white, to: teal}),
    set(mallets, {delay: delay(90, 1.5), to: teal}),
  ],

  // m13 -> nothing
  'C4': [],

  // m13 -> fourth hit
  'C#4': [],

  // m15 -> nothing
  'D4': [],

  // m16 -> letter B
  'D#4': [
    set(all, {delay: delay(90, 3), to: gentleGreen}),
  ],



}
