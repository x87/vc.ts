// Generated from main/buypro6.sc

import { $ } from "../utils/vars.mts";

async function mission_start_lnkvbuy() {


  // SCRIPT_NAME lnkvbuy


  ONMISSION = 1;

  //304.5807 376.3138 12.1856 269.8422


  await asyncWait(0);



  $.lnkvbuy_blip.remove();
  Stat.PlayerMadeProgress(1);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.lnkvbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.lnkvbuyX, $.lnkvbuyY, $.lnkvbuyZ, 19 /* RADAR_SPRITE_SAVEHOUSE */);
      $.lnkvbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      // START_NEW_SCRIPT lnkvsave1_save_loop 
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.lnkvbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.lnkvbuyX, $.lnkvbuyY, $.lnkvbuyZ, 19 /* RADAR_SPRITE_SAVEHOUSE */);
  $.lnkvbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
  // START_NEW_SCRIPT lnkvsave1_save_loop 


  World.ClearArea(306.5728, 376.2928, 12.1856, 1.0, true /* TRUE */);
  $.player1.setCoordinates(306.5728, 376.2928, 12.1856);
  $.player1.setHeading(276.3156);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(241.4097, 420.0691, 10.3880, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(242.1410, 419.4232, 10.6071, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.links_view_bought = 1;
  //CREATE_CLOTHES_PICKUP 304.6 372.2 13.2 1 safehouse_clothes6

  $.safehouse_created6 = 1;
  Text.PrintWithNumberBig("LNKVBUY", $.lnkvbuy_price, 5000, 6); //"Links View Apartment purchased: $ 15000"
  Stat.AddMoneySpentOnProperty($.lnkvbuy_price);
  Stat.SetPropertyAsOwned(9 /* PROP_LINKSVIEW */);
  //lnkvbuy_price *= -1
  //ADD_SCORE player1 lnkvbuy_price

  Audio.PlayMissionPassedTune(1);
  Audio.SetMusicDoesFade(false /* FALSE */);


  await asyncWait(2000);

  //	IF NOT IS_PLAYER_PLAYING player1
  //		SET_MUSIC_DOES_FADE TRUE
  //		TERMINATE_THIS_SCRIPT
  //	ENDIF
  //
  //	SET_FIXED_CAMERA_POSITION 308.0695 369.4077 12.9178 0.0 0.0 0.0
  //	POINT_CAMERA_AT_POINT 307.5253 370.2357 13.0535 JUMP_CUT


  Text.PrintNow("BUYSAVE", 3000, 1); //~g~You can now save your game here for free.


  await asyncWait(3000);


  Camera.SetFixedPosition(313.6496, 390.9760, 14.5314, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(313.0024, 391.7380, 14.5534, 2 /* JUMP_CUT */);


  Text.PrintNow("BUYGARG", 3000, 1); //~g~You can also store vehicles in this garage.
  $.lnkvbuy_save_garage.changeType(26 /* GARAGE_HIDEOUT_SIX */);


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

export async function buypro6() {
  // MissionBoundary



}
