// Generated from main/buypro7.sc

import { $ } from "../utils/vars.mts";

async function mission_start_hycobuy() {


  // SCRIPT_NAME hycobuy


  ONMISSION = 1;


  await asyncWait(0);



  $.hycobuy_blip.remove();
  Stat.PlayerMadeProgress(1);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.hycobuy_blip = Blip.AddShortRangeSpriteForContactPoint($.hycobuyX, $.hycobuyY, $.hycobuyZ, 19 /* RADAR_SPRITE_SAVEHOUSE */);
      $.hycobuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      // START_NEW_SCRIPT hycosave1_save_loop 
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.hycobuy_blip = Blip.AddShortRangeSpriteForContactPoint($.hycobuyX, $.hycobuyY, $.hycobuyZ, 19 /* RADAR_SPRITE_SAVEHOUSE */);
  $.hycobuy_blip.changeDisplay(2 /* BLIP_ONLY */);
  // START_NEW_SCRIPT hycosave1_save_loop 


  World.ClearArea(-833.8110, 1304.0696, 10.5131, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-833.8110, 1304.0696, 10.5131);
  $.player1.setHeading(200.4458);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(-905.0276, 1352.5636, 50.7682, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-904.0880, 1352.2612, 50.9287, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.hyman_condo_bought = 1;
  $.safehouse_clothes2 = Pickup.CreateClothes(-820.2, 1364.1, 66.4, 1);
  $.safehouse_created2 = 1;
  Text.PrintWithNumberBig("HYCOBUY", $.hycobuy_price, 5000, 6); //"Hyman Condo purchased: $ 15000"
  Stat.AddMoneySpentOnProperty($.hycobuy_price);
  Stat.SetPropertyAsOwned(14 /* PROP_HYMAN_CONDO */);
  //hycobuy_price *= -1
  //ADD_SCORE player1 hycobuy_price

  Audio.PlayMissionPassedTune(1);
  Audio.SetMusicDoesFade(false /* FALSE */);


  await asyncWait(2000);

  //	IF NOT IS_PLAYER_PLAYING player1
  //		SET_MUSIC_DOES_FADE TRUE
  //		TERMINATE_THIS_SCRIPT
  //	ENDIF
  //
  //	SET_FIXED_CAMERA_POSITION -825.6582 1296.7921 12.5176 0.0 0.0 0.0
  //	POINT_CAMERA_AT_POINT -826.3120 1297.5386 12.3943 JUMP_CUT


  Text.PrintNow("BUYSAVE", 3000, 1); //~g~You can now save your game here for free.


  await asyncWait(3000);


  Camera.SetFixedPosition(-848.3207, 1292.8352, 11.4866, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-847.6996, 1293.6107, 11.5998, 2 /* JUMP_CUT */);


  Text.PrintNow("BUYGARS", 3000, 1); //~g~You can also store vehicles in these garages.
  $.hycobuy_save_garage1.changeType(17 /* GARAGE_HIDEOUT_TWO */);
  $.hycobuy_save_garage2.changeType(18 /* GARAGE_HIDEOUT_THREE */);
  $.hycobuy_save_garage3.changeType(24 /* GARAGE_HIDEOUT_FOUR */);


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

export async function buypro7() {
  // MissionBoundary


}
