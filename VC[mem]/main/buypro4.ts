// Generated from main/buypro4.sc

import { $ } from "../utils/vars.mts";

async function mission_start_buypro4() {


  // SCRIPT_NAME buypro4


  ONMISSION = 1;
  if (ONMISSION == 0) {
    $.strpbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.strpbuyX, $.strpbuyY, $.strpbuyZ, 20 /* RADAR_SPRITE_STRIPCLUB */);
    $.strpbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
  }


  await asyncWait(0);



  $.strpbuy_blip.remove();
  Stat.PlayerMadeProgress(1);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.strpbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.strpbuyX, $.strpbuyY, $.strpbuyZ, 20 /* RADAR_SPRITE_STRIPCLUB */);
      $.strpbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      //START_NEW_SCRIPT strpbuy_save_loop
      $.flag_membership = 1;
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.strpbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.strpbuyX, $.strpbuyY, $.strpbuyZ, 20 /* RADAR_SPRITE_STRIPCLUB */);
  $.strpbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
  // START_NEW_SCRIPT strpbuy_save_loop 
  $.flag_membership = 1;
  $.clothes_pickup8 = Pickup.CreateClothes(158.3, -1275.9, 10.6, 9);
  $.clothes8_created = 1;
  // START_NEW_SCRIPT cloth7 


  World.ClearArea(100.9297, -1470.6222, 9.3871, 1.0, true /* TRUE */);
  $.player1.setCoordinates(100.9297, -1470.6222, 9.3871);
  $.player1.setHeading(218.0275);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(112.9674, -1486.2183, 11.2691, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(112.1791, -1485.6305, 11.4509, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  Text.PrintWithNumberBig("STRPBUY", $.strpbuy_price, 5000, 6); //"Pole Position Club membership purchased: $ 15000"
  Stat.AddMoneySpentOnProperty($.strpbuy_price);
  Stat.SetPropertyAsOwned(7 /* PROP_STRIPCLUB */);
  //	strpbuy_price *= -1
  //	ADD_SCORE player1 strpbuy_price

  Audio.PlayMissionPassedTune(1);
  Audio.SetMusicDoesFade(false /* FALSE */);


  await asyncWait(4000);


  if (!($.player1.isPlaying())) {
    Audio.SetMusicDoesFade(true /* TRUE */);
    return; // TERMINATE_THIS_SCRIPT
  }

  //SET_FIXED_CAMERA_POSITION 97.5334 -1473.4329 11.0017 0.0 0.0 0.0
  //POINT_CAMERA_AT_POINT 97.9273 -1472.5416 10.7771 JUMP_CUT

  //PRINT_NOW BUYSAVE 3000 1//~g~You can now save your game here for free.
  //WAIT 3000


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      Audio.SetMusicDoesFade(true /* TRUE */);
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();


  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
  Game.SetAllCarsCanBeDamaged(true /* TRUE */);
  Hud.SwitchWidescreen(false /* OFF */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Audio.SetMusicDoesFade(true /* TRUE */);



  ONMISSION = 0;


  Mission.Finish();
  // MissionBoundary
}

export async function buypro4() {
  // MissionBoundary



}
