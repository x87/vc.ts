// Generated from main/buypro11.sc

import { $ } from "../vars.mts";

async function mission_start_skumbuy() {


  // SCRIPT_NAME skumbuy


  ONMISSION = 1;



  await asyncWait(0);



  $.skumbuy_blip.remove();
  Stat.PlayerMadeProgress(1);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.skumbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.skumbuyX, $.skumbuyY, $.skumbuyZ, RADAR_SPRITE_SAVEHOUSE);
      $.skumbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      // START_NEW_SCRIPT skumsave1_save_loop
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.skumbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.skumbuyX, $.skumbuyY, $.skumbuyZ, RADAR_SPRITE_SAVEHOUSE);
  $.skumbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
  // START_NEW_SCRIPT skumsave1_save_loop


  World.ClearArea(-559.9, 705.4, 19.8, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-559.9, 705.4, 19.8);
  $.player1.setHeading(243.0);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(-570.4593, 708.1309, 24.3593, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-569.6928, 707.5626, 24.0599, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.skumole_bought = 1;
  //CREATE_CLOTHES_PICKUP -556.3 697.4 20.5 1 safehouse_clothes1

  $.safehouse_created1 = 1;
  Text.PrintWithNumberBig("SKUMBUY", $.skumbuy_price, 5000, 6); //Skumole shack purchased: $ ~1~
  Stat.AddMoneySpentOnProperty($.skumbuy_price);
  Stat.SetPropertyAsOwned(PROP_SKUMOLESHACK);
  //skumbuy_price *= -1
  //ADD_SCORE player1 skumbuy_price

  Audio.PlayMissionPassedTune(1);
  Audio.SetMusicDoesFade(false /* FALSE */);


  await asyncWait(2000);

  //	IF NOT IS_PLAYER_PLAYING player1
  //		SET_MUSIC_DOES_FADE TRUE
  //		TERMINATE_THIS_SCRIPT
  //	ENDIF
  //
  //	SET_FIXED_CAMERA_POSITION -594.2932 656.6464 13.1278 0.0 0.0 0.0
  //	POINT_CAMERA_AT_POINT -594.7159 655.7872 12.8394 JUMP_CUT


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

export async function buypro11() {
  // MissionBoundary



}
