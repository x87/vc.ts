// Generated from main/buypro8.sc

import { $ } from "../utils/vars.mts";

async function mission_start_ochebuy() {


  // SCRIPT_NAME ochebuy


  ONMISSION = 1;



  await asyncWait(0);



  $.ochebuy_blip.remove();
  Stat.PlayerMadeProgress(1);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.ochebuy_blip = Blip.AddShortRangeSpriteForContactPoint($.ochebuyX, $.ochebuyY, $.ochebuyZ, 19 /* RADAR_SPRITE_SAVEHOUSE */);
      $.ochebuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      // START_NEW_SCRIPT ochesave1_save_loop 
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.ochebuy_blip = Blip.AddShortRangeSpriteForContactPoint($.ochebuyX, $.ochebuyY, $.ochebuyZ, 19 /* RADAR_SPRITE_SAVEHOUSE */);
  $.ochebuy_blip.changeDisplay(2 /* BLIP_ONLY */);
  // START_NEW_SCRIPT ochesave1_save_loop 


  World.ClearArea(14.4571, -1498.5939, 12.1974, 1.0, true /* TRUE */);
  $.player1.setCoordinates(14.4571, -1498.5939, 12.1974);
  $.player1.setHeading(353.8286);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(-9.9202, -1467.0503, 10.1140, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-9.3760, -1467.8127, 10.4639, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.ocean_heights_bought = 1;
  //CREATE_CLOTHES_PICKUP 19.4 -1501.1 13.2 1 safehouse_clothes7

  $.safehouse_created7 = 1;
  Text.PrintWithNumberBig("OCHEBUY", $.ochebuy_price, 5000, 6); //Ocean Heights Apartment purchased: $ ~1~
  Stat.AddMoneySpentOnProperty($.ochebuy_price);
  Stat.SetPropertyAsOwned(12 /* PROP_OCEANHEIGHTS */);
  //ochebuy_price *= -1
  //ADD_SCORE player1 ochebuy_price

  Audio.PlayMissionPassedTune(1);
  Audio.SetMusicDoesFade(false /* FALSE */);


  await asyncWait(2000);

  //	IF NOT IS_PLAYER_PLAYING player1
  //		SET_MUSIC_DOES_FADE TRUE
  //		TERMINATE_THIS_SCRIPT
  //	ENDIF
  //
  //	SET_FIXED_CAMERA_POSITION 18.5316 -1497.9888 13.6879 0.0 0.0 0.0
  //	POINT_CAMERA_AT_POINT 17.6983 -1498.5264 13.5598 JUMP_CUT


  Text.PrintNow("BUYSAVE", 3000, 1); //~g~You can now save your game here for free.


  await asyncWait(3000);


  Camera.SetFixedPosition(17.7346, -1467.6738, 18.6329, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(18.0802, -1468.5117, 18.2106, 2 /* JUMP_CUT */);


  Text.PrintNow("BUYGARG", 3000, 1); //~g~You can also store vehicles in this garage.
  $.ochebuy_save_garage.changeType(25 /* GARAGE_HIDEOUT_FIVE */);


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

export async function buypro8() {
  // MissionBoundary



}
