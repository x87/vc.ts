// Generated from main/buypro5.sc

import { $ } from "../vars.mts";

async function mission_start_buypro5() {


  // SCRIPT_NAME buypro5


  ONMISSION = 1;


  await asyncWait(0);



  $.nbmnbuy_blip.remove();
  Stat.PlayerMadeProgress(1);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.nbmnbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.nbmnbuyX, $.nbmnbuyY, $.nbmnbuyZ, RADAR_SPRITE_SAVEHOUSE);
      $.nbmnbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      // START_NEW_SCRIPT nbmnsave1_save_loop
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.nbmnbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.nbmnbuyX, $.nbmnbuyY, $.nbmnbuyZ, RADAR_SPRITE_SAVEHOUSE);
  $.nbmnbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
  // START_NEW_SCRIPT nbmnsave1_save_loop


  World.ClearArea(428.3730, 608.9806, 11.6898, 1.0, true /* TRUE */);
  $.player1.setCoordinates(428.3730, 608.9806, 11.6898);
  $.player1.setHeading(0.0);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(415.9304, 640.0891, 12.9833, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(416.2365, 639.1425, 13.0847, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.elswanko_bought = 1;
  //CREATE_CLOTHES_PICKUP 431.9 606.3 12.7 1 safehouse_clothes5

  $.safehouse_created5 = 1;
  Text.PrintWithNumberBig("NBMNBUY", $.nbmnbuy_price, 5000, 6); //"Elswanko Casa purchased: $ 15000"
  Stat.AddMoneySpentOnProperty($.nbmnbuy_price);
  Stat.SetPropertyAsOwned(PROP_EL_SWANKO);
  //	nbmnbuy_price *= -1
  //	ADD_SCORE player1 nbmnbuy_price

  Audio.PlayMissionPassedTune(1);
  Audio.SetMusicDoesFade(false /* FALSE */);


  await asyncWait(2000);

  //	IF NOT IS_PLAYER_PLAYING player1
  //		SET_MUSIC_DOES_FADE TRUE
  //		TERMINATE_THIS_SCRIPT
  //	ENDIF
  //
  //	SET_FIXED_CAMERA_POSITION 431.1143 614.5876 19.6257 0.0 0.0 0.0
  //	POINT_CAMERA_AT_POINT 430.9002 613.8718 18.9610 JUMP_CUT


  Text.PrintNow("BUYSAVE", 3000, 1); //~g~You can now save your game here for free.


  await asyncWait(3000);


  Camera.SetFixedPosition(427.8130, 650.6702, 15.3209, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(428.6758, 650.2003, 15.1346, 2 /* JUMP_CUT */);


  Text.PrintNow("BUYGARG", 3000, 1); //~g~You can also store vehicles in this garage.
  $.nbmnbuy_save_garage.changeType(16 /* GARAGE_HIDEOUT_ONE */);


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

export async function buypro5() {
  // MissionBoundary



}
