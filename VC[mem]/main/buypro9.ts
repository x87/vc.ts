// Generated from main/buypro9.sc

import { $ } from "../vars.mts";

async function mission_start_washbuy() {


  // SCRIPT_NAME washbuy


  ONMISSION = 1;


  await asyncWait(0);



  $.washbuy_blip.remove();
  Stat.PlayerMadeProgress(1);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.washbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.washbuyX, $.washbuyY, $.washbuyZ, RADAR_SPRITE_SAVEHOUSE);
      $.washbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      // START_NEW_SCRIPT washsave1_save_loop
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.washbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.washbuyX, $.washbuyY, $.washbuyZ, RADAR_SPRITE_SAVEHOUSE);
  $.washbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
  // START_NEW_SCRIPT washsave1_save_loop


  World.ClearArea(90.7810, -806.1213, 10.3349, 1.0, true /* TRUE */);
  $.player1.setCoordinates(90.7810, -806.1213, 10.3349);
  $.player1.setHeading(238.8605);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(57.5999, -681.8762, 10.4095, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(57.8653, -682.8020, 10.6787, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.washington_1102_bought = 1;
  //CREATE_CLOTHES_PICKUP 86.5 -810.4 11.7 1 safehouse_clothes3

  $.safehouse_created3 = 1;


  Text.PrintWithNumberBig("WASHBUY", $.washbuy_price, 5000, 6); //1102 Washington Street purchased: $ ~1~
  Stat.AddMoneySpentOnProperty($.washbuy_price);
  Stat.SetPropertyAsOwned(PROP_WASHINGTON_STREET);
  //washbuy_price *= -1
  //ADD_SCORE player1 washbuy_price

  Audio.PlayMissionPassedTune(1);
  Audio.SetMusicDoesFade(false /* FALSE */);


  await asyncWait(2000);

  //	IF NOT IS_PLAYER_PLAYING player1
  //		SET_MUSIC_DOES_FADE TRUE
  //		TERMINATE_THIS_SCRIPT
  //	ENDIF
  //
  //	SET_FIXED_CAMERA_POSITION 94.9633 -798.4363 14.1172 0.0 0.0 0.0
  //	POINT_CAMERA_AT_POINT 94.2972 -799.1451 13.8847 JUMP_CUT


  Text.PrintNow("BUYSAVE", 3000, 1); //~g~You can now save your game here for free.


  await asyncWait(3000);


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


  await get_fading_status();  // SCM GOSUB get_fading_status


  Audio.SetMusicDoesFade(true /* TRUE */);



  ONMISSION = 0;


  Mission.Finish();
  // MissionBoundary
}

export async function buypro9() {
  // MissionBoundary



}
