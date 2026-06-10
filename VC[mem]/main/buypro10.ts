// Generated from main/buypro10.sc

import { $ } from "../vars.mts";

async function mission_start_vcptbuy() {


  // SCRIPT_NAME vcptbuy


  ONMISSION = 1;



  await asyncWait(0);



  $.vcptbuy_blip.remove();
  Stat.PlayerMadeProgress(1);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.vcptbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.vcptbuyX, $.vcptbuyY, $.vcptbuyZ, RADAR_SPRITE_SAVEHOUSE);
      $.vcptbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      // START_NEW_SCRIPT vcptsave1_save_loop
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.vcptbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.vcptbuyX, $.vcptbuyY, $.vcptbuyZ, RADAR_SPRITE_SAVEHOUSE);
  $.vcptbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
  // START_NEW_SCRIPT vcptsave1_save_loop


  World.ClearArea(529.6626, 1272.1550, 16.8220, 1.0, true /* TRUE */);
  $.player1.setCoordinates(529.6626, 1272.1550, 16.8220);
  $.player1.setHeading(131.5277);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(468.3571, 1259.4579, 21.8848, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(469.2978, 1259.7969, 21.8834, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.vice_point_3321_bought = 1;
  //CREATE_CLOTHES_PICKUP 529.3 1276.0 18.1 1 safehouse_clothes4

  $.safehouse_created4 = 1;
  Text.PrintWithNumberBig("VCPTBUY", $.vcptbuy_price, 5000, 6); //3321 Vice Point purchased: $ ~1~
  Stat.AddMoneySpentOnProperty($.vcptbuy_price);
  Stat.SetPropertyAsOwned(PROP_VICEPOINT);
  //vcptbuy_price *= -1
  //ADD_SCORE player1 vcptbuy_price

  Audio.PlayMissionPassedTune(1);
  Audio.SetMusicDoesFade(false /* FALSE */);


  await asyncWait(2000);

  //	IF NOT IS_PLAYER_PLAYING player1
  //		SET_MUSIC_DOES_FADE TRUE
  //		TERMINATE_THIS_SCRIPT
  //	ENDIF
  //
  //	SET_FIXED_CAMERA_POSITION 520.4236 1277.4825 18.1398 0.0 0.0 0.0
  //	POINT_CAMERA_AT_POINT 521.3804 1277.2106 18.2429 JUMP_CUT


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

export async function buypro10() {
  // MissionBoundary



}
