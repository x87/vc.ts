// Generated from main/rock4.sc

import { $ } from "../vars.mts";

async function mission_start_rock4() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;


  flag_psycho_dead_rock4 = 0;


  await asyncWait(0);





  // ****************************************START OF CUTSCENE********************************

  /*
  IF CAN_PLAYER_START_MISSION player1
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player1
  ELSE
  GOTO mission_assin_failed
  ENDIF

  LOAD_SPECIAL_CHARACTER 1 CSplay
  LOAD_SPECIAL_CHARACTER 2 CSkent

  //LOAD_SPECIAL_MODEL cut_obj1 PLAYERH
  //LOAD_SPECIAL_MODEL cut_obj2 LAWYERH

  //LOAD_SCENE 1218.4 -314.5 28.9

  LOAD_ALL_MODELS_NOW

  WHILE NOT HAS_SPECIAL_CHARACTER_LOADED 1
  OR NOT HAS_SPECIAL_CHARACTER_LOADED 2

  //OR NOT HAS_MODEL_LOADED cut_obj1
  //OR NOT HAS_MODEL_LOADED cut_obj2
  WAIT 0

  ENDWHILE

  LOAD_CUTSCENE rok_4a

  SET_CUTSCENE_OFFSET 476.972 -65.499 8.943
  SET_NEAR_CLIP 0.1

  CREATE_CUTSCENE_OBJECT SPECIAL01 cs_play
  SET_CUTSCENE_ANIM cs_play CSplay

  CREATE_CUTSCENE_OBJECT SPECIAL02 cs_kent
  SET_CUTSCENE_ANIM cs_kent CSkent

  //CREATE_CUTSCENE_HEAD cs_ken CUT_OBJ2 cs_kenhead
  //SET_CUTSCENE_HEAD_ANIM cs_kenhead lawyer

  //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
  //SET_CUTSCENE_HEAD_ANIM cs_playerhead player1

  CLEAR_AREA 495.12 -83.39 9.02 1.0 TRUE
  SET_PLAYER_COORDINATES player1 495.12 -83.39 9.02
  SET_PLAYER_HEADING player1 223.21

  DO_FADE 1500 FADE_IN

  SWITCH_RUBBISH OFF
  SWITCH_STREAMING ON
  START_CUTSCENE

  // Displays cutscene text

  GET_CUTSCENE_TIME cs_time


  WHILE cs_time < 171
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  PRINT_NOW ( TM1_A ) 10000 1 // Mission brief


  CLEAR_PRINTS


  WHILE NOT HAS_CUTSCENE_FINISHED
  WAIT 0

  ENDWHILE

  DO_FADE 1500 FADE_OUT


  CLEAR_PRINTS

  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE


  SWITCH_RUBBISH ON
  CLEAR_CUTSCENE
  SET_CAMERA_BEHIND_PLAYER

  UNLOAD_SPECIAL_CHARACTER 1
  UNLOAD_SPECIAL_CHARACTER 2

  */


  // ****************************************END OF CUTSCENE**********************************

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  // Waiting for the ped models to load


  Streaming.RequestModel(HMOCA);

  //REQUEST_MODEL BAT


  while (!(Streaming.HasModelLoaded(HMOCA))) {
    //OR NOT HAS_MODEL_LOADED BAT

    await asyncWait(0);


  }


  Text.PrintNow("RBM4_1", 5000, 1); //"Go and deal with the psycho stalking the band, make sure you finsh the job this time!

  // Creates the psycho


  psycho_rock4 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HMOCA, -874.6, 1053.0, 10.1);


  psycho_rock4.clearThreatSearch();

  //GIVE_WEAPON_TO_CHAR psycho_rock4 WEAPONTYPE_BASEBALLBAT 1


  psycho_rock4.wanderDir(-1);


  radar_blip_psycho_rock4 = Blip.AddForChar(psycho_rock4);


  while (flag_psycho_dead_rock4 == 0) {
    await asyncWait(0);
    if (flag_psycho_dead_rock4 == 0) {
      if (Char.IsDead(psycho_rock4)) {
        radar_blip_psycho_rock4.remove();
        flag_psycho_dead_rock4 = 1;
      }
      else {
        if ($.player1.locateAnyMeansChar3D(psycho_rock4, 20.0, 20.0, 20.0, false /* FALSE */)) {
          psycho_rock4.setObjKillPlayerOnFoot($.player1);
        }
        else {
          psycho_rock4.setObjFleePlayerOnFootTillSafe($.player1);
        }


      }


    }


  }


  radar_blip_psycho_rock4.remove();


  // SCM GOTO → mission_rock4_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_rock4_passed"); // fallback: would break linear control flow



}



// ****************************************** Mission Failed *******************************


async function mission_rock4_failed() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}





// *************************************** Mission Passed **********************************


async function mission_rock4_passed() {


  $.flag_rock_mission4_passed = 1;
  //REGISTER_MISSION_PASSED ( )

  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  Text.PrintWithNumberBig("M_PASS", 1000, 5000, 1); //"Mission Passed!"
  $.player1.addScore(1000);
  $.rock_contact_blip.remove(); // mission strand has ended so remove the contact blip
}




// *************************************** Mission Cleanup *********************************


async function mission_cleanup_rock4() {


  ONMISSION = 0;
  radar_blip_psycho_rock4.remove();
  Streaming.MarkModelAsNoLongerNeeded(HMOCA);
  //MARK_MODEL_AS_NO_LONGER_NEEDED BAT

  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function rock4() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ************************************ Rock Mission One ***********************************
  // ************************************** The Concert **************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME rockb4

  // Mission start stuff


  await mission_start_rock4();  // SCM GOSUB mission_start_rock4


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_rock4_failed();  // SCM GOSUB mission_rock4_failed
  }


  await mission_cleanup_rock4();  // SCM GOSUB mission_cleanup_rock4


  // MissionBoundary


  // Variables for mission


  // VAR_INT psycho_rock4


  // VAR_INT radar_blip_coord1_rock4


  // VAR_INT flag_psycho_dead_rock4


  // VAR_INT radar_blip_psycho_rock4



  // ****************************************Mission Start************************************


}
