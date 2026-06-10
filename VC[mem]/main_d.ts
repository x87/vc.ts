// Generated from main_d.sc

import { $ } from "./vars.mts";

async function mission_start() {
  // SCM GOTO → mission_start lowered to endless loop
  while (true) {


    await asyncWait(1000);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.serg_mission3_start == 0) {
          if ($.flag_sergio_mission2_passed == 1 && $.flag_baron_mission2_passed == 1) {
            // START_NEW_SCRIPT serg_mission3_loop
            $.sergio_contact_blip.remove();
            $.sergio_contact_blip = Blip.AddSpriteForContactPoint($.sergioX, $.sergioY, $.sergioZ, $.the_sergio_blip);
            $.serg_mission3_start = 1;
          }
        }
      }
      if ($.game_percentage < 100.0) {
        $.game_percentage = Stat.GetProgressPercentage();
      }
      else {
        if ($.created_final_shirt == 0) {
          $.final_clothes = Pickup.CreateClothes(-382.6, -585.9, 25.3, 12);
          Text.PrintHelp("CUNTY"); //New clothes delivered to the Vercetti Estate!
          $.player1.increaseMaxHealth(50);
          $.player1.increaseMaxArmor(50);
          $.player1.addArmour(200);
          $.player1.setHealth(200);
          await asyncWait(5000);
          Text.PrintHelp("HELP61"); // You now have limitless ammo and double health on all vehicles.!
          $.created_final_shirt = 1;
        }
      }


      if ($.robbed_every_shop == 15) {
        Stat.PlayerMadeProgress(1);
        $.robbed_every_shop = -1;
      }


    }




  }
}



// ************************************************************************************************************
// ********************************************MAIN MISSIONS***************************************************
// ************************************************************************************************************

// *******************************************Hotel cut scene**************************************************

// Hotel Mission 1


async function hotel_mission1_loop() {





  // SCRIPT_NAME HOT
}



async function hotel_mission1_loop_inner() {
  // SCM GOTO → hotel_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.flag_hotel_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.hotelX, $.hotelY, $.hotelZ, 1.4, 1.8, 1.5, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            Hud.SwitchWidescreen(true /* ON */);
            Camera.SetFixedPosition(219.726, -1282.485, 12.530, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(218.872, -1282.988, 12.392, 2 /* JUMP_CUT */);
            $.player1.setHeading(100.0);
            $.scplayer.setObjGotoCoordOnFoot(204.3, -1288.7);
            TIMERA = 0;
            while (!(TIMERA > 1000)) {
              await asyncWait(0);
              if ($.player1.isPlaying()) {
                if ($.player1.locateOnFoot3D(204.2, -1287.8, 14.4, 2.0, 2.0, 2.0, false /* FALSE */)) {
                  $.scplayer.setObjGotoCoordOnFoot(203.0, -1294.5);
                }
              }
            }
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("INT_B", 15000, 2); //"hotel mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission hotel.sc
          }
        }
      }
    }




  }
}




// ************************************************************************************************************
// *******************************************Lawyer Missions**************************************************

// Lawyer Mission 1


async function lawyer_mission1_loop() {





  // SCRIPT_NAME LAW1
}



async function lawyer_mission1_loop_inner() {
  // SCM GOTO → lawyer_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_lawyer_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.lawyerX, $.lawyerY, $.lawyerZ, 1.2, 1.2, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await lawyer_script_cut();  // SCM GOSUB lawyer_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("LAW_1", 15000, 2); //"Lawyer mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission lawyer1.sc
          }


        }
      }
    }




  }
}




// Lawyer Mission 2


async function lawyer_mission2_loop() {





  // SCRIPT_NAME LAW2
}



async function lawyer_mission2_loop_inner() {
  // SCM GOTO → lawyer_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_lawyer_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.lawyerX, $.lawyerY, $.lawyerZ, 1.2, 1.2, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            ONMISSION = 1;
            $.player1.makeSafeForCutscene();
            await lawyer_script_cut();  // SCM GOSUB lawyer_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("LAW_2", 15000, 2); //"Lawyer mission 2"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission lawyer2.sc
          }


        }
      }
    }




  }
}



// Lawyer Mission 3


async function lawyer_mission3_loop() {





  // SCRIPT_NAME LAW3
}



async function lawyer_mission3_loop_inner() {
  // SCM GOTO → lawyer_mission3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_lawyer_mission3_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.lawyerX, $.lawyerY, $.lawyerZ, 1.2, 1.2, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            ONMISSION = 1;
            $.player1.makeSafeForCutscene();
            await lawyer_script_cut();  // SCM GOSUB lawyer_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("LAW_3", 15000, 2); //"Lawyer mission 3"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission lawyer3.sc
          }


        }
      }
    }




  }
}



// Lawyer Mission 4


async function lawyer_mission4_loop() {





  // SCRIPT_NAME LAW4
}



async function lawyer_mission4_loop_inner() {
  // SCM GOTO → lawyer_mission4_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_lawyer_mission4_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.lawyerX, $.lawyerY, $.lawyerZ, 1.2, 1.2, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            ONMISSION = 1;
            $.player1.makeSafeForCutscene();
            await lawyer_script_cut();  // SCM GOSUB lawyer_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("LAW_4", 15000, 2); //"Lawyer mission 4"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission lawyer4.sc
          }


        }
      }
    }




  }
}



// ************************************************************************************************************
// ***************************************The Generals Missions************************************************

// General Mission 1


async function general_mission1_loop() {



  // SCRIPT_NAME GEN1
}



async function general_mission1_loop_inner() {
  // SCM GOTO → general_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_general_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.generalX, $.generalY, $.generalZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await general_script_cut();  // SCM GOSUB general_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("COL_1", 15000, 2); //"general mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission general1.sc
          }
        }
      }
    }




  }
}



// General Mission 2


async function general_mission2_loop() {



  // SCRIPT_NAME GEN2
}



async function general_mission2_loop_inner() {
  // SCM GOTO → general_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_general_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.generalX, $.generalY, $.generalZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await general_script_cut();  // SCM GOSUB general_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("COL_2", 15000, 2); //"general mission 2"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission general2.sc
          }
        }
      }
    }




  }
}



// General Mission 3


async function general_mission3_loop() {



  // SCRIPT_NAME GEN3
}



async function general_mission3_loop_inner() {
  // SCM GOTO → general_mission3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_general_mission3_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.generalX, $.generalY, $.generalZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await general_script_cut();  // SCM GOSUB general_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("COL_3", 15000, 2); //"general mission 3"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission general3.sc
          }
        }
      }
    }




  }
}




// General Mission 4


async function general_mission4_loop() {



  // SCRIPT_NAME GEN4
}



async function general_mission4_loop_inner() {
  // SCM GOTO → general_mission4_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_general_mission4_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.generalX, $.generalY, $.generalZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await general_script_cut();  // SCM GOSUB general_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("COL_4", 15000, 2); //"general mission 4"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission general4.sc
          }
        }
      }
    }




  }
}



// General Mission 5


async function general_mission5_loop() {



  // SCRIPT_NAME GEN5
}



async function general_mission5_loop_inner() {
  // SCM GOTO → general_mission5_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_general_mission5_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.generalX, $.generalY, $.generalZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await general_script_cut();  // SCM GOSUB general_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("COL_5", 15000, 2); //"general mission 5"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission general5.sc
          }
        }
      }
    }




  }
}




// ************************************************************************************************************
// ***************************************The Barons Missions**************************************************

// Baron Mission 1


async function baron_mission1_loop() {





  // SCRIPT_NAME BAR1
}



async function baron_mission1_loop_inner() {
  // SCM GOTO → baron_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_baron_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.baronX, $.baronY, $.baronZ, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await baron_script_cut();  // SCM GOSUB baron_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("COK_1", 15000, 2); //"baron mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission baron1.sc
          }
        }
      }
    }




  }
}




// Baron Mission 2


async function baron_mission2_loop() {





  // SCRIPT_NAME BAR2
}



async function baron_mission2_loop_inner() {
  // SCM GOTO → baron_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_baron_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.baronX, $.baronY, $.baronZ, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await baron_script_cut();  // SCM GOSUB baron_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("COK_2", 15000, 2); //"baron mission 2"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission baron2.sc
          }
        }
      }
    }




  }
}



// Baron Mission 3


async function baron_mission3_loop() {





  // SCRIPT_NAME BAR3
}



async function baron_mission3_loop_inner() {
  // SCM GOTO → baron_mission3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_baron_mission3_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.baronX, $.baronY, $.baronZ, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await baron_script_cut();  // SCM GOSUB baron_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("COK_3", 15000, 2); //"baron mission 3"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission baron3.sc
          }
        }
      }
    }





  }
}



// Baron Mission 4


async function baron_mission4_loop() {





  // SCRIPT_NAME BAR4
}



async function baron_mission4_loop_inner() {
  // SCM GOTO → baron_mission4_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_baron_mission4_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.baronX, $.baronY, $.baronZ, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await baron_script_cut();  // SCM GOSUB baron_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("COK_4", 15000, 2); //"baron mission 4"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission baron4.sc
          }
        }
      }
    }




  }
}



// Baron Mission 5


async function baron_mission5_loop() {





  // SCRIPT_NAME BAR5
}



async function baron_mission5_loop_inner() {
  // SCM GOTO → baron_mission5_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_baron_mission5_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.baron2X, $.baron2Y, $.baron2Z, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            ONMISSION = 1;
            $.player1.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig("ASS_1", 15000, 2); //"baron mission 5"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission baron5.sc
          }
        }
      }
    }




  }
}




// ************************************************************************************************************
// ***************************************The Kent Missions**************************************************

// Kent Paul mission1


async function kent_mission1_loop() {





  // SCRIPT_NAME KEN1
}



async function kent_mission1_loop_inner() {
  // SCM GOTO → kent_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_kent_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D(491.0, -77.7, 10.4, 2.5, 2.5, 2.5, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await kent_script_cut();  // SCM GOSUB kent_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("KENT_1", 15000, 2); //"kent mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission kent1.sc
          }
        }
      }
    }




  }
}



// ************************************************************************************************************
// ***************************************The Sergio Missions**************************************************

// Sergio Mission 1


async function serg_mission1_loop() {





  // SCRIPT_NAME SER1
}



async function sergio_mission1_loop_inner() {
  // SCM GOTO → sergio_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_sergio_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.sergioX, $.sergioY, $.sergioZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("TEX_1", 15000, 2); //"sergio mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission serg1.sc
          }
        }
      }
    }




  }
}




// Sergio Mission 2


async function serg_mission2_loop() {





  // SCRIPT_NAME SER2
}



async function sergio_mission2_loop_inner() {
  // SCM GOTO → sergio_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_sergio_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.sergioX, $.sergioY, $.sergioZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("TEX_3", 15000, 2); //"sergio mission 2"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission serg3.sc
          }
        }
      }
    }




  }
}




// Sergio Mission 3


async function serg_mission3_loop() {





  // SCRIPT_NAME SER3
}



async function sergio_mission3_loop_inner() {
  // SCM GOTO → sergio_mission3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_sergio_mission3_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.sergioX, $.sergioY, $.sergioZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("TEX_2", 15000, 2); //"sergio mission 3"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission serg2.sc
          }
        }
      }
    }




  }
}





// ***********************************************************************************************************
// ***************************************The bankjob Missions************************************************

// bankjob Mission 1


async function bankjob_mission1_loop() {





  // SCRIPT_NAME BANK1
}



async function bankjob_mission1_loop_inner() {
  // SCM GOTO → bankjob_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_bankjob_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.bankjobX, $.bankjobY, $.bankjobZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await bankjob_script_cut();  // SCM GOSUB bankjob_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("BANK_1", 15000, 2); //"bankjob mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission bankj1.sc
          }
        }
      }
    }




  }
}



// bankjob Mission 2


async function bankjob_mission2_loop() {





  // SCRIPT_NAME BANK2
}



async function bankjob_mission2_loop_inner() {
  // SCM GOTO → bankjob_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_bankjob_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.bankjobX, $.bankjobY, $.bankjobZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await bankjob_script_cut();  // SCM GOSUB bankjob_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("BANK_2", 15000, 2); //"bankjob mission 2"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission bankj2.sc
          }
        }
      }
    }




  }
}




// bankjob Mission 3


async function bankjob_mission3_loop() {





  // SCRIPT_NAME BANK3
}



async function bankjob_mission3_loop_inner() {
  // SCM GOTO → bankjob_mission3_loop_inner lowered to endless loop
  while (true) {



    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_bankjob_mission3_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.bankjobX, $.bankjobY, $.bankjobZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await bankjob_script_cut();  // SCM GOSUB bankjob_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("BANK_3", 15000, 2); //"bankjob mission 3"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission bankj3.sc
          }
        }
      }
    }




  }
}




// bankjob Mission 4


async function bankjob_mission4_loop() {





  // SCRIPT_NAME BANK4
}



async function bankjob_mission4_loop_inner() {
  // SCM GOTO → bankjob_mission4_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_bankjob_mission4_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.bankjobX, $.bankjobY, $.bankjobZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await bankjob_script_cut();  // SCM GOSUB bankjob_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("BANK_4", 15000, 2); //"bankjob mission 4"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission bankj4.sc
          }
        }
      }
    }




  }
}




async function ambient_bank_loop() {





  // SCRIPT_NAME AMBBANK


  // LVAR_INT created_ambbank_stuff ambbank_cash1 ambbank_cash2 ambbank_cash3 ambbank_cash4 ambbank_cash5 ambbank_alarm
  created_ambbank_stuff = 0;
}



async function ambient_bank_loop_inner() {
  // SCM GOTO → ambient_bank_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_player_in_bank == 1) {
      if ($.player1.isPlaying()) {
        if (created_ambbank_stuff == 0) {
          if ($.player1.locateAnyMeans3D(-926.8099, -327.8378, 13.3894, 4.0, 4.0, 4.0, false)) {
            $.player1.alterWantedLevelNoDrop(4);
            ambbank_cash1 = Pickup.CreateMoney(-965.2795, -334.6384, 15.0, 500);
            ambbank_cash2 = Pickup.CreateMoney(-965.3696, -333.3853, 15.0, 500);
            ambbank_cash3 = Pickup.CreateMoney(-927.4954, -339.4821, 17.2, 500);
            ambbank_cash4 = Pickup.CreateMoney(-930.0884, -339.5698, 17.2, 500);
            ambbank_cash5 = Pickup.CreateMoney(-932.9709, -339.4713, 17.2, 500);
            ambbank_alarm = Sound.AddContinuous(-923.4324, -333.2397, 14.3816, SOUND_BANK_ALARM_LOOP);
            created_ambbank_stuff = 1;
          }
        }
      }
    }
    else {
      if (created_ambbank_stuff == 1) {
        ambbank_alarm.remove();
        ambbank_cash1.remove();
        ambbank_cash2.remove();
        ambbank_cash3.remove();
        ambbank_cash4.remove();
        ambbank_cash5.remove();
        created_ambbank_stuff = 0;
      }
    }



  }
}




// ************************************************************************************************************
// ***************************************The phil Missions************************************************

// phil Mission 1


async function phil_mission1_loop() {





  // SCRIPT_NAME PHI1
}



async function phil_mission1_loop_inner() {
  // SCM GOTO → phil_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_phil_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.philX, $.philY, $.philZ, 1.5, 1.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await phil_script_cut();  // SCM GOSUB phil_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("PHIL_1", 15000, 2); //"phil mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission phil1.sc
          }
        }
      }
    }




  }
}



// phil Mission 2


async function phil_mission2_loop() {





  // SCRIPT_NAME PHI2
}



async function phil_mission2_loop_inner() {
  // SCM GOTO → phil_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_phil_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.philX, $.philY, $.philZ, 1.5, 1.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await phil_script_cut();  // SCM GOSUB phil_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("PHIL_2", 15000, 2); //"phil mission 2"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission phil2.sc
          }
        }
      }
    }




  }
}



// ************************************************************************************************************
// ***************************************The porn Missions****************************************************

// porn Mission 1


async function porn_mission1_loop() {





  // SCRIPT_NAME PORN1
}



async function porn_mission1_loop_inner() {
  // SCM GOTO → porn_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_porn_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.pornX, $.pornY, $.pornZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await porn_script_cut();  // SCM GOSUB porn_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("PORN_1", 15000, 2); //"porn mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission porn1.sc
          }
        }
      }
    }




  }
}



// porn Mission 2


async function porn_mission2_loop() {





  // SCRIPT_NAME PORN2
}



async function porn_mission2_loop_inner() {
  // SCM GOTO → porn_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_porn_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.pornX, $.pornY, $.pornZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await porn_script_cut();  // SCM GOSUB porn_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("PORN_2", 15000, 2); //"porn mission 2"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission porn2.sc
          }
        }
      }
    }




  }
}




// porn Mission 3


async function porn_mission3_loop() {





  // SCRIPT_NAME PORN3
}



async function porn_mission3_loop_inner() {
  // SCM GOTO → porn_mission3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_porn_mission3_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.pornX, $.pornY, $.pornZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await porn_script_cut();  // SCM GOSUB porn_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("PORN_3", 15000, 2); //"porn mission 3"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission porn3.sc
          }
        }
      }
    }




  }
}



// porn Mission 4


async function porn_mission4_loop() {





  // SCRIPT_NAME PORN4
}



async function porn_mission4_loop_inner() {
  // SCM GOTO → porn_mission4_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_porn_mission4_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.pornX, $.pornY, $.pornZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await porn_script_cut();  // SCM GOSUB porn_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("PORN_4", 15000, 2); //"porn mission 4"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission porn4.sc
          }
        }
      }
    }




  }
}



// ************************************************************************************************************
// ***************************************The protect Missions****************************************************

// protect Mission 1


async function protect_mission1_loop() {





  // SCRIPT_NAME PRO1
}



async function protect_mission1_loop_inner() {
  // SCM GOTO → protect_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_protect_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D(-378.3, -579.8, 24.5, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("BUD_1", 15000, 2); //"protect mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission prot1.sc
          }
        }
      }
    }




  }
}




// protect Mission 2


async function protect_mission2_loop() {





  // SCRIPT_NAME PRO2
}



async function protect_mission2_loop_inner() {
  // SCM GOTO → protect_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_protect_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D(-397.4, -561.3, 18.7, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("BUD_2", 15000, 2); //"protect mission 2"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission prot2.sc
          }
        }
      }
    }




  }
}




// protect Mission 3


async function protect_mission3_loop() {





  // SCRIPT_NAME PRO3
}



async function protect_mission3_loop_inner() {
  // SCM GOTO → protect_mission3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_protect_mission3_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D(-348.5, -541.8, 16.4, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("BUD_3", 15000, 2); //"protect mission 3"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission prot3.sc
          }
        }
      }
    }




  }
}




// ************************************************************************************************************
// ***************************************The Counterfeiting Missions****************************************************


// counter Mission 1


async function counter_mission1_loop() {





  // SCRIPT_NAME COU1
}



async function counter_mission1_loop_inner() {
  // SCM GOTO → counter_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_counter_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.counterX, $.counterY, $.counterZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await counter_script_cut();  // SCM GOSUB counter_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("CNT_1", 15000, 2); //"counter mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission count1.sc
          }
        }
      }
    }




  }
}





// counter Mission 2


async function counter_mission2_loop() {





  // SCRIPT_NAME COU2
}



async function counter_mission2_loop_inner() {
  // SCM GOTO → counter_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_counter_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.counterX, $.counterY, $.counterZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await counter_script_cut();  // SCM GOSUB counter_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("CNT_2", 15000, 2); //"counter mission 2"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission count2.sc
          }
        }
      }
    }




  }
}



// ************************************************************************************************************
// ************************************** PROPERTY BUYING *****************************************************

// PRINTWORKS PURCHASING SCRIPT

async function print_buy_loop() {





  // SCRIPT_NAME COUBUY
}



async function print_buy_loop_inner() {
  // SCM GOTO → print_buy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.print_works_pickup.hasBeenCollected()) {
            // LoadLaunchMission buypro1.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}



// CAR SHOWROOM PURCHASING SCRIPT

async function property_car_loop() {





  // SCRIPT_NAME CARBUY
}



async function property_car_loop_inner() {
  // SCM GOTO → property_car_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.carbuy_pickup.hasBeenCollected()) {
            $.player1.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig("SUNSHIN", 6000, 2); //"SUNSHINE AUTOS"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission carbuy.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}



//FILM STUDIO PURCHASING SCRIPT

async function pornbuy_loop() {





  // SCRIPT_NAME PORNBUY
}



async function pornbuy_loop_inner() {
  // SCM GOTO → pornbuy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.pornbuy_pickup.hasBeenCollected()) {
            // LoadLaunchMission buypro2.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}



//ICECREAM FACTORY PURCHASING SCRIPT

async function icebuy_loop() {





  // SCRIPT_NAME icebuy
}



async function icebuy_loop_inner() {
  // SCM GOTO → icebuy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.icebuy_pickup.hasBeenCollected()) {
            $.player1.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig("CHERRYP", 6000, 2); //"CHERRY POPPER ICECREAMS"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // START_NEW_SCRIPT icecream_mission1_loop
            // LoadLaunchMission icecut.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}



//TAXI FIRM PURCHASING SCRIPT

async function taxibuy_loop() {





  // SCRIPT_NAME taxibuy
}



async function taxibuy_loop_inner() {
  // SCM GOTO → taxibuy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.taxibuy_pickup.hasBeenCollected()) {
            $.player1.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig("KAUFCAB", 6000, 2); //"Taxi Firm purchased: $ 15000"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // START_NEW_SCRIPT taxiwar_mission1_loop
            // LoadLaunchMission taxicut.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}



//MALIBU CLUB PURCHASING SCRIPT

async function bankbuy_loop() {





  // SCRIPT_NAME BANKBUY
}



async function bankbuy_loop_inner() {
  // SCM GOTO → bankbuy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.bankbuy_pickup.hasBeenCollected()) {
            // LoadLaunchMission buypro3.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}



//BOAT YARD PURCHASING SCRIPT

async function boatbuy_loop() {





  // SCRIPT_NAME boatbuy
}



async function boatbuy_loop_inner() {
  // SCM GOTO → boatbuy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.boatbuy_pickup.hasBeenCollected()) {
            $.player1.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig("BOATYAR", 6000, 2); //"Boat Yard purchased: $ 15000"
            await get_fading_status();  // SCM GOSUB get_fading_status
            //START_NEW_SCRIPT boat_mission1_loop
            // LoadLaunchMission boatbuy.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}




//STRIPCLUB PURCHASING SCRIPT

async function strpbuy_loop() {





  // SCRIPT_NAME strpbuy
}



async function strpbuy_loop_inner() {
  // SCM GOTO → strpbuy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.strpbuy_pickup.hasBeenCollected()) {
            // LoadLaunchMission buypro4.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}



//ELSWANKO CASA

async function nbmnbuy_loop() {





  // SCRIPT_NAME nbmnbuy
}



async function nbmnbuy_loop_inner() {
  // SCM GOTO → nbmnbuy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.nbmnbuy_pickup.hasBeenCollected()) {
            // LoadLaunchMission buypro5.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}



//LINKS VIEW APARTMENT

async function lnkvbuy_loop() {





  // SCRIPT_NAME lnkvby
}



async function lnkvbuy_loop_inner() {
  // SCM GOTO → lnkvbuy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.lnkvbuy_pickup.hasBeenCollected()) {
            // LoadLaunchMission buypro6.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}




//HYMAN CONDO

async function hycobuy_loop() {





  // SCRIPT_NAME hycoby
}



async function hycobuy_loop_inner() {
  // SCM GOTO → hycobuy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.hycobuy_pickup.hasBeenCollected()) {
            // LoadLaunchMission buypro7.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}




//OCEAN HEIGHTS APARTMENT

async function ochebuy_loop() {





  // SCRIPT_NAME ocheby
}



async function ochebuy_loop_inner() {
  // SCM GOTO → ochebuy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.ochebuy_pickup.hasBeenCollected()) {
            // LoadLaunchMission buypro8.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}




//1102 WASHINGTON STREET

async function washbuy_loop() {





  // SCRIPT_NAME washby
}



async function washbuy_loop_inner() {
  // SCM GOTO → washbuy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.washbuy_pickup.hasBeenCollected()) {
            // LoadLaunchMission buypro9.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}




//3321 VICE POINT

async function vcptbuy_loop() {





  // SCRIPT_NAME vcptby
}



async function vcptbuy_loop_inner() {
  // SCM GOTO → vcptbuy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.vcptbuy_pickup.hasBeenCollected()) {
            // LoadLaunchMission buypro10.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}




//SKUMOLE TERRACE

async function skumbuy_loop() {





  // SCRIPT_NAME skumby
}



async function skumbuy_loop_inner() {
  // SCM GOTO → skumbuy_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.skumbuy_pickup.hasBeenCollected()) {
            // LoadLaunchMission buypro11.sc
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }


  }
}






// ************************************************************************************************************
// ***************************************The finale Missions**************************************************

// finale Mission 1


async function finale_mission1_loop() {





  // SCRIPT_NAME FIN1
}



async function finale_mission1_loop_inner() {
  // SCM GOTO → finale_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_finale_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.counterX, $.counterY, $.counterZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await counter_script_cut();  // SCM GOSUB counter_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("CAP_1", 15000, 2); //"finale mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission cap_1.sc
          }
        }
      }
    }




  }
}





// finale Mission 2


async function finale_mission2_loop() {





  // SCRIPT_NAME FIN2
}



async function finale_mission2_loop_inner() {
  // SCM GOTO → finale_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_finale_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D(-378.3, -579.8, 24.5, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            if ($.player1.isScoreGreater(1000)) {
              await make_player_safe();  // SCM GOSUB make_player_safe
              Text.PrintBig("FIN_1", 15000, 2); //"finale mission 2"
              await get_fading_status();  // SCM GOSUB get_fading_status
              // LoadLaunchMission finale.sc
            }
            else {
              if ($.got_money_help_print == 0) {
                Text.PrintHelp("FIN_B6"); //You do not have enough money to start this mission.
                $.got_money_help_print = 1;
              }
            }
          }
        }
      }
      else {
        $.got_money_help_print = 0;
      }
    }




  }
}



// ************************************************************************************************************
// ********************************************GANG MEMBERS***************************************************


async function gang_member_loop() {



  // SCRIPT_NAME GANGMEM


  // VAR_INT gang_member gang_member_1
  // LVAR_INT gang_member_2 gang_member_3
  // LVAR_INT gang_member_flag gang_member_1_flag gang_member_2_flag gang_member_3_flag
  // LVAR_INT gang_member_blip gang_member_1_blip gang_member_2_blip gang_member_3_blip
  // LVAR_FLOAT gang_member_start_x gang_member_start_y gang_member_start_z gang_member_start_heading
  // LVAR_FLOAT gang_member_locate_x gang_member_locate_y
  // VAR_FLOAT percentage_of_game_complete
  $.gang_member_1 = -1;
  gang_member_2 = -1;
  gang_member_3 = -1;
  gang_member_1_blip = 0;
  gang_member_2_blip = 0;
  gang_member_3_blip = 0;
  gang_member_1_flag = 0;
  gang_member_2_flag = 0;
  gang_member_3_flag = 0;
  $.percentage_of_game_complete = 0.0;
}



async function gang_member_loop_inner() {
  // SCM GOTO → gang_member_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    $.percentage_of_game_complete = Stat.GetProgressPercentage();


    while ($.percentage_of_game_complete == 100.0) {
      await asyncWait(100);
      $.gang_member = $.gang_member_1;
      gang_member_flag = gang_member_1_flag;
      gang_member_blip = gang_member_1_blip;
      gang_member_start_x = -403.7998;
      gang_member_start_y = -558.5297;
      gang_member_start_z = 17.9388;
      gang_member_start_heading = 170.5255;
      gang_member_locate_x = -403.7675;
      gang_member_locate_y = -559.4329;
      await do_each_gang_member();  // SCM GOSUB do_each_gang_member
      $.gang_member_1 = $.gang_member;
      gang_member_1_flag = gang_member_flag;
      gang_member_1_blip = gang_member_blip;
      await asyncWait(100);
      $.gang_member = gang_member_2;
      gang_member_flag = gang_member_2_flag;
      gang_member_blip = gang_member_2_blip;
      gang_member_start_x = -401.1314;
      gang_member_start_y = -565.7331;
      gang_member_start_z = 18.5404;
      gang_member_start_heading = 100.8949;
      gang_member_locate_x = -402.1638;
      gang_member_locate_y = -565.7678;
      await do_each_gang_member();  // SCM GOSUB do_each_gang_member
      gang_member_2 = $.gang_member;
      gang_member_2_flag = gang_member_flag;
      gang_member_2_blip = gang_member_blip;
      await asyncWait(100);
      $.gang_member = gang_member_3;
      gang_member_flag = gang_member_3_flag;
      gang_member_blip = gang_member_3_blip;
      gang_member_start_x = -404.3082;
      gang_member_start_y = -561.7204;
      gang_member_start_z = 17.9388;
      gang_member_start_heading = 7.0257;
      gang_member_locate_x = -404.3812;
      gang_member_locate_y = -561.1186;
      await do_each_gang_member();  // SCM GOSUB do_each_gang_member
      gang_member_3 = $.gang_member;
      gang_member_3_flag = gang_member_flag;
      gang_member_3_blip = gang_member_blip;


    }


  }
}



async function do_each_gang_member() {
  if (ONMISSION == 0) {
    if ($.player1.isPlaying()) {
      if ($.player1.isInInfoZone("gang1")) {
        if ($.player1.isScoreGreater(6000)) {
          if (gang_member_flag == 0) {
            if (Streaming.HasModelLoaded(PGA)) {
              if (Streaming.HasModelLoaded(178 /* UZI */)) {
                if (!(Camera.IsPointOnScreen(gang_member_start_x, gang_member_start_y, gang_member_start_z, 1.0))) {
                  $.gang_member = Char.Create(4 /* PEDTYPE_CIVMALE */, PGA, gang_member_start_x, gang_member_start_y, gang_member_start_z);
                  $.gang_member.setHeading(gang_member_start_heading);
                  $.gang_member.setAsPlayerFriend($.player1, true /* TRUE */);
                  $.gang_member.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                  $.gang_member.clearThreatSearch();
                  $.gang_member.setNeverTargeted(true /* TRUE */);
                  $.gang_member.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
                  $.gang_member.setWaitState(WAITSTATE_SIT_IDLE, 60000000);
                  $.gang_member.dontRemove();
                  $.gang_member.setRunning(true /* TRUE */);
                  $.gang_member.setHealth(250);
                  $.gang_member.setAccuracy(80);
                  $.gang_member.setCanBeShotInVehicle(false /* FALSE */);
                  $.gang_member.setSuffersCriticalHits(false /* FALSE */);
                  gang_member_blip = Sphere.Create(gang_member_locate_x, gang_member_locate_y, gang_member_start_z, 0.75);
                  gang_member_flag = 1;
                }
              }
            }
          }
        }
      }
      else {
        if (gang_member_flag < 2) {
          $.gang_member.markAsNoLongerNeeded();
          gang_member_flag = 0;
          gang_member_blip.remove();
        }
      }
      if (gang_member_flag == 1) {
        if (!(Char.IsDead($.gang_member))) {
          if ($.player1.locateAnyMeans3D(gang_member_locate_x, gang_member_locate_y, gang_member_start_z, 1.0, 1.0, 2.0, false)) {
            if ($.player1.isScoreGreater(2000)) {
              $.player1.addScore(-2000);
            }
            $.gang_member.followPlayer($.player1);
            $.gang_member.clearWaitState();
            gang_member_blip.remove();
            gang_member_flag = 2;
          }
        }
        else {
          await clear_up_gang_member();  // SCM GOSUB clear_up_gang_member
        }
      }
      if (gang_member_flag == 2) {
        if (!(Char.IsDead($.gang_member))) {
          if ($.player1.locateAnyMeansChar2D($.gang_member, 100.0, 100.0, false)) {
            if (!($.gang_member.isInPlayersGroup($.player1))) {
              $.gang_member.followPlayer($.player1);
            }
          }
          else {
            await clear_up_gang_member();  // SCM GOSUB clear_up_gang_member
          }
        }
        else {
          await clear_up_gang_member();  // SCM GOSUB clear_up_gang_member
        }
      }
    }
    else {
      await clear_up_gang_member();  // SCM GOSUB clear_up_gang_member
    }
  }
  else {
    await clear_up_gang_member();  // SCM GOSUB clear_up_gang_member
  }
}



async function clear_up_gang_member() {
  if (!(gang_member_flag == 0)) {
    $.gang_member.markAsNoLongerNeeded();
    if ($.player1.isPlaying()) {
      if (!($.player1.isInInfoZone("gang1"))) {
        gang_member_flag = 0;
      }
    }
    else {
      gang_member_flag = 0;
    }
    gang_member_blip.remove();
  }
}



// ************************************************************************************************************
// ********************************************ARMY BASE STUFF*************************************************

async function army_base_loop() {


  // SCRIPT_NAME ARMYBAS


  // LVAR_INT setup_army_base_stuff
  setup_army_base_stuff = 0;
}



async function army_base_loop_inner() {
  // SCM GOTO → army_base_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if ($.player1.isInInfoZone("AIRPORT") || $.player1.isInInfoZone("ARMYBAS")) {
        if (setup_army_base_stuff == 0) {
          Gang.SetPedModels(GANG_STREET, ARMY, ARMY);
          Game.SetThreatForPedType(PEDTYPE_GANG_STREET, 1 /* THREAT_PLAYER1 */);
          Gang.SetWeapons(GANG_STREET, WEAPONTYPE_M4, WEAPONTYPE_M4);
          Gang.SetAttackPlayerWithCops(GANG_STREET, true /* TRUE */);
          Streaming.RequestModel(ARMY);
          setup_army_base_stuff = 1;
        }
        if (setup_army_base_stuff == 1) {
          if ($.player1.isInModel(HUNTER) || $.player1.isWearing("player6") || $.player1.isInArea2D(-1682.2396, -179.9125, -1600.4482, -150.8878, false)) {
            Game.ClearThreatForPedType(PEDTYPE_GANG_STREET, 1 /* THREAT_PLAYER1 */);
          }
          else {
            Game.SetThreatForPedType(PEDTYPE_GANG_STREET, 1 /* THREAT_PLAYER1 */);
          }
        }
      }
      else {
        if (setup_army_base_stuff == 1) {
          Gang.SetPedModels(GANG_STREET, SGA, SGB);
          Game.ClearThreatForPedType(PEDTYPE_GANG_STREET, 1 /* THREAT_PLAYER1 */);
          Gang.SetWeapons(GANG_STREET, 2 /* WEAPONTYPE_PISTOL */, 0 /* WEAPONTYPE_UNARMED */);
          Gang.SetAttackPlayerWithCops(GANG_STREET, false /* FALSE */);
          await asyncWait(0);
          await asyncWait(0);
          await asyncWait(0);
          if ($.flag_player_on_army_ped_mission == 0) {
            Streaming.MarkModelAsNoLongerNeeded(ARMY);
          }
          setup_army_base_stuff = 0;
        }
      }
    }


  }
}


// ************************************************************************************************************
// ********************************************GANG MISSIONS***************************************************
// ************************************************************************************************************
// *****************************************The Biker Missions*************************************************

// bikers Mission 1


async function bikers_mission1_loop() {





  // SCRIPT_NAME BIK1
}



async function bikers_mission1_loop_inner() {
  // SCM GOTO → bikers_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_bikers_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.bikersX, $.bikersY, $.bikersZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await biker_script_cut();  // SCM GOSUB biker_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("BIKE_1", 15000, 2); //"bikers mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission bike1.sc
          }
        }
      }
    }




  }
}



// bikers Mission 2


async function bikers_mission2_loop() {





  // SCRIPT_NAME BIK2
}



async function bikers_mission2_loop_inner() {
  // SCM GOTO → bikers_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_bikers_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.bikersX, $.bikersY, $.bikersZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await biker_script_cut();  // SCM GOSUB biker_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("BIKE_2", 15000, 2); //"bikers mission 2"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission bike2.sc
          }
        }
      }
    }




  }
}



// bikers Mission 3


async function bikers_mission3_loop() {





  // SCRIPT_NAME BIK3
}



async function bikers_mission3_loop_inner() {
  // SCM GOTO → bikers_mission3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_bikers_mission3_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.bikersX, $.bikersY, $.bikersZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await biker_script_cut();  // SCM GOSUB biker_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("BIKE_3", 15000, 2); //"bikers mission 3"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission bike3.sc
          }
        }
      }
    }




  }
}



// ************************************************************************************************************
// ***************************************The Cuban Missions***************************************************

// cuban Mission 1


async function cuban_mission1_loop() {





  // SCRIPT_NAME CUB1
}



async function cuban_mission1_loop_inner() {
  // SCM GOTO → cuban_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.flag_cuban_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.cubanX, $.cubanY, $.cubanZ, 2.0, 2.2, 3.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await cuban_script_cut();  // SCM GOSUB cuban_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("CUB_1", 15000, 2); //"cuban mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission cuban1.sc
          }
        }
      }
    }




  }
}




// cuban Mission 2


async function cuban_mission2_loop() {





  // SCRIPT_NAME CUB2
}



async function cuban_mission2_loop_inner() {
  // SCM GOTO → cuban_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.flag_cuban_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.cubanX, $.cubanY, $.cubanZ, 2.0, 2.2, 3.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await cuban_script_cut();  // SCM GOSUB cuban_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("CUB_2", 15000, 2); //"cuban mission 2"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission cuban2.sc
          }
        }
      }
    }




  }
}




// cuban Mission 3


async function cuban_mission3_loop() {





  // SCRIPT_NAME CUB3
}



async function cuban_mission3_loop_inner() {
  // SCM GOTO → cuban_mission3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.flag_cuban_mission3_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.cubanX, $.cubanY, $.cubanZ, 2.0, 2.2, 3.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await cuban_script_cut();  // SCM GOSUB cuban_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("CUB_3", 15000, 2); //"cuban mission 3"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission cuban3.sc
          }
        }
      }
    }




  }
}




// cuban Mission 4


async function cuban_mission4_loop() {





  // SCRIPT_NAME CUB4
}



async function cuban_mission4_loop_inner() {
  // SCM GOTO → cuban_mission4_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.flag_cuban_mission4_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.cubanX, $.cubanY, $.cubanZ, 2.0, 2.2, 3.0, false /* FALSE */)) {
        if (Game.IsGerman()) {
          if ($.flag_haitian_mission2_passed == 1) {
            if (ONMISSION == 0) {
              if ($.player1.canStartMission()) {
                await cuban_script_cut();  // SCM GOSUB cuban_script_cut
                await make_player_safe();  // SCM GOSUB make_player_safe
                Text.PrintBig("CUB_4", 15000, 2); //"cuban mission 4"
                await get_fading_status();  // SCM GOSUB get_fading_status
                // LoadLaunchMission cuban4.sc
              }
            }
          }
          else {
            Text.PrintNow("GOAWAY1", 5000, 1); //"Must complete all the haitian missions first"
            while ($.player1.locateOnFoot3D($.cubanX, $.cubanY, $.cubanZ, 2.0, 2.2, 3.0, false /* FALSE */)) {
              await asyncWait(0);
              if (!($.player1.isPlaying())) {
                // SCM GOTO → cuban_mission4_loop_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO cuban_mission4_loop_inner"); // fallback: would break linear control flow
              }
            }
          }
        }
        else {
          if ($.flag_haitian_mission3_passed == 1) {
            if (ONMISSION == 0) {
              if ($.player1.canStartMission()) {
                await cuban_script_cut();  // SCM GOSUB cuban_script_cut
                await make_player_safe();  // SCM GOSUB make_player_safe
                Text.PrintBig("CUB_4", 15000, 2); //"cuban mission 4"
                await get_fading_status();  // SCM GOSUB get_fading_status
                // LoadLaunchMission cuban4.sc
              }
            }
          }
          else {
            Text.PrintNow("GOAWAY1", 5000, 1); //"Must complete all the haitian missions first"
            while ($.player1.locateOnFoot3D($.cubanX, $.cubanY, $.cubanZ, 2.0, 2.2, 3.0, false /* FALSE */)) {
              await asyncWait(0);
              if (!($.player1.isPlaying())) {
                // SCM GOTO → cuban_mission4_loop_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO cuban_mission4_loop_inner"); // fallback: would break linear control flow
              }
            }
          }
        }
      }
    }




  }
}




// ************************************************************************************************************
// ***************************************The Haitian Missions*************************************************

// Haitian Mission 1


async function haitian_mission1_loop() {





  // SCRIPT_NAME HAT1
}



async function haitian_mission1_loop_inner() {
  // SCM GOTO → haitian_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_haitian_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.haitianX, $.haitianY, $.haitianZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await haitian_script_cut();  // SCM GOSUB haitian_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("HAT_1", 15000, 2); //"haitian mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission hait1.sc
          }
        }
      }
    }




  }
}




// Haitian Mission 2


async function haitian_mission2_loop() {





  // SCRIPT_NAME HAT2
}



async function haitian_mission2_loop_inner() {
  // SCM GOTO → haitian_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_haitian_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.haitianX, $.haitianY, $.haitianZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await haitian_script_cut();  // SCM GOSUB haitian_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("HAT_2", 15000, 2); //"haitian mission 2"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission hait2.sc
          }
        }
      }
    }




  }
}




// Haitian Mission 3


async function haitian_mission3_loop() {





  // SCRIPT_NAME HAT3
}



async function haitian_mission3_loop_inner() {
  // SCM GOTO → haitian_mission3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_haitian_mission3_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.haitianX, $.haitianY, $.haitianZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await haitian_script_cut();  // SCM GOSUB haitian_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("HAT_3", 15000, 2); //"haitian mission 3"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission hait3.sc
          }
        }
      }
    }




  }
}




// ************************************************************************************************************
// ***************************************The rock Missions*************************************************

// rock Mission 1


async function rock_mission1_loop() {





  // SCRIPT_NAME ROC1
}



async function rock_mission1_loop_inner() {
  // SCM GOTO → rock_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_rock_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.rockX, $.rockY, $.rockZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await rock_script_cut();  // SCM GOSUB rock_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("ROCK_1", 15000, 2); //"rock mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission rock1.sc
          }
        }
      }
    }




  }
}




// rock Mission 2


async function rock_mission2_loop() {





  // SCRIPT_NAME ROC2
}



async function rock_mission2_loop_inner() {
  // SCM GOTO → rock_mission2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_rock_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.rockX, $.rockY, $.rockZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            await rock_script_cut();  // SCM GOSUB rock_script_cut
            await make_player_safe();  // SCM GOSUB make_player_safe
            Text.PrintBig("ROCK_2", 15000, 2); //"rock mission 2"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission rock2.sc
          }
        }
      }
    }




  }
}




// rock Mission 3


async function rock_mission3_loop() {





  // SCRIPT_NAME ROC3
}



async function rock_mission3_loop_inner() {
  // SCM GOTO → rock_mission3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_rock_mission3_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D($.rockX, $.rockY, $.rockZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
        if ($.flag_bikers_mission3_passed == 1) {
          if (ONMISSION == 0) {
            if ($.player1.canStartMission()) {
              await rock_script_cut();  // SCM GOSUB rock_script_cut
              await make_player_safe();  // SCM GOSUB make_player_safe
              Text.PrintBig("ROCK_3", 15000, 2); //"rock mission 3"
              await get_fading_status();  // SCM GOSUB get_fading_status
              // LoadLaunchMission rock3.sc
            }
          }
        }
        else {
          Text.PrintNow("GOAWAY2", 1000, 2);
          while ($.player1.locateOnFoot3D($.rockX, $.rockY, $.rockZ, 1.5, 2.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → rock_mission3_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO rock_mission3_loop_inner"); // fallback: would break linear control flow
            }
          }
        }
      }
    }





  }
}



// ************************************************************************************************************
// *******************************************Shooting Range Missions**************************************************

// Shoot Mission 1


async function shoot_range_loop() {





  // SCRIPT_NAME SHOOT


  if ($.player1.isPlaying()) {
    while ($.player1.locateOnFoot3D(-665.63, 1231.863, 10.1, 10.0, 10.0, 3.0, false /* FALSE */)) {
      await asyncWait(0);
      if ($.player1.isPlaying()) {
      }
    }
  }
}



async function shoot_range_loop_inner() {
  // SCM GOTO → shoot_range_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.player1.locateOnFoot3D(-665.63, 1231.863, 10.1, 1.0, 1.0, 2.0, true /* TRUE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            ONMISSION = 1;
            $.player1.setControl(false /* OFF */);
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission range.sc
            if ($.player1.isPlaying()) {
              while ($.player1.locateOnFoot3D(-665.63, 1231.863, 10.1, 10.0, 10.0, 3.0, false /* FALSE */)) {
                await asyncWait(0);
                if ($.player1.isPlaying()) {
                }
              }
            }
          }
        }
      }
    }




  }
}




// ************************************************************************************************************
// ********************************************ODD JOBS********************************************************
// ************************************************************************************************************
// ***************************************The Assassin Missions************************************************

// Assasin Mission 1


async function assin_mission1_loop() {



  // SCRIPT_NAME ASSIN_1
}



async function assin1_loop_inner() {
  // SCM GOTO → assin1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_assin_mission1_passed == 1) {
      $.assin_phone1.turnOff();
      return; // TERMINATE_THIS_SCRIPT
    }


    if (ONMISSION == 0) {
      $.assin_phone1.turnOn();
    }
    else {
      $.assin_phone1.turnOff();
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateStoppedOnFoot3D($.ass_1_x, $.ass_1_y, $.ass_1_z, 1.0, 1.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            ONMISSION = 1;
            $.assin_phone1.turnOff();
            $.player1.setControl(false /* OFF */);
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig("JOB_1", 15000, 2); //"assasin mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission assin1.sc
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → assin1_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO assin1_loop_inner"); // fallback: would break linear control flow
          }
          while ($.player1.locateOnFoot3D($.ass_1_x, $.ass_1_y, $.ass_1_z, 1.0, 1.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → assin1_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO assin1_loop_inner"); // fallback: would break linear control flow
            }


          }


        }
      }
    }




  }
}




// Assasin Mission 2


async function assin_mission2_loop() {





  // SCRIPT_NAME ASSIN_2
}



async function assin2_loop_inner() {
  // SCM GOTO → assin2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_assin_mission2_passed == 1) {
      $.assin_phone2.turnOff();
      return; // TERMINATE_THIS_SCRIPT
    }


    if (ONMISSION == 0) {
      $.assin_phone2.turnOn();
    }
    else {
      $.assin_phone2.turnOff();
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateStoppedOnFoot3D($.ass_2_x, $.ass_2_y, $.ass_2_z, 1.0, 1.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            ONMISSION = 1;
            $.assin_phone2.turnOff();
            $.player1.setControl(false /* OFF */);
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig("JOB_2", 15000, 2); //"assasin mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission assin2.sc
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → assin2_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO assin2_loop_inner"); // fallback: would break linear control flow
          }
          while ($.player1.locateOnFoot3D($.ass_2_x, $.ass_2_y, $.ass_2_z, 1.0, 1.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → assin2_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO assin2_loop_inner"); // fallback: would break linear control flow
            }


          }


        }
      }
    }




  }
}





// Assasin Mission 3


async function assin_mission3_loop() {





  // SCRIPT_NAME ASSIN_3
}



async function assin3_loop_inner() {
  // SCM GOTO → assin3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_assin_mission3_passed == 1) {
      $.assin_phone3.turnOff();
      return; // TERMINATE_THIS_SCRIPT
    }


    if (ONMISSION == 0) {
      $.assin_phone3.turnOn();
    }
    else {
      $.assin_phone3.turnOff();
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateStoppedOnFoot3D($.ass_3_x, $.ass_3_y, $.ass_3_z, 1.0, 1.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            ONMISSION = 1;
            $.assin_phone3.turnOff();
            $.player1.setControl(false /* OFF */);
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig("JOB_3", 15000, 2); //"assasin mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission assin3.sc
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → assin3_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO assin3_loop_inner"); // fallback: would break linear control flow
          }
          while ($.player1.locateOnFoot3D($.ass_3_x, $.ass_3_y, $.ass_3_z, 1.0, 1.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → assin3_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO assin3_loop_inner"); // fallback: would break linear control flow
            }


          }


        }
      }
    }




  }
}



// Assasin Mission 4


async function assin_mission4_loop() {





  // SCRIPT_NAME ASSIN_4
}



async function assin4_loop_inner() {
  // SCM GOTO → assin4_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_assin_mission4_passed == 1) {
      $.assin_phone4.turnOff();
      return; // TERMINATE_THIS_SCRIPT
    }


    if (ONMISSION == 0) {
      $.assin_phone4.turnOn();
    }
    else {
      $.assin_phone4.turnOff();
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateStoppedOnFoot3D($.ass_4_x, $.ass_4_y, $.ass_4_z, 1.0, 1.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            ONMISSION = 1;
            $.assin_phone4.turnOff();
            $.player1.setControl(false /* OFF */);
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig("JOB_4", 15000, 2); //"assasin mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission assin4.sc
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → assin4_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO assin4_loop_inner"); // fallback: would break linear control flow
          }
          while ($.player1.locateOnFoot3D($.ass_4_x, $.ass_4_y, $.ass_4_z, 1.0, 1.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → assin4_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO assin4_loop_inner"); // fallback: would break linear control flow
            }


          }


        }
      }
    }




  }
}



// Assasin Mission 5


async function assin_mission5_loop() {





  // SCRIPT_NAME ASSIN_5
}



async function assin5_loop_inner() {
  // SCM GOTO → assin5_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_assin_mission5_passed == 1) {
      $.assin_phone5.turnOff();
      return; // TERMINATE_THIS_SCRIPT
    }


    if (ONMISSION == 0) {
      $.assin_phone5.turnOn();
    }
    else {
      $.assin_phone5.turnOff();
    }


    if ($.player1.isPlaying()) {
      if ($.player1.locateStoppedOnFoot3D($.ass_5_x, $.ass_5_y, $.ass_5_z, 1.0, 1.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            ONMISSION = 1;
            $.assin_phone5.turnOff();
            $.player1.setControl(false /* OFF */);
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig("JOB_5", 15000, 2); //"assasin mission 1"
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission assin5.sc
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → assin5_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO assin5_loop_inner"); // fallback: would break linear control flow
          }
          while ($.player1.locateOnFoot3D($.ass_5_x, $.ass_5_y, $.ass_5_z, 1.0, 1.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → assin5_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO assin5_loop_inner"); // fallback: would break linear control flow
            }


          }


        }
      }
    }




  }
}




// ************************************************************************************************************
// ********************************************Taxiwar Mission 1**************************************************

// taxiwar Mission 1


async function taxiwar_mission1_loop() {



  // SCRIPT_NAME TWAR1
}



async function taxiwar1_loop_inner() {
  // SCM GOTO → taxiwar1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_taxiwar_mission1_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.isInModel(kaufman) && $.player1.locateInCar3D($.taxiwarX, $.taxiwarY, $.taxiwarZ, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            $.been_in_a_taxi_before = 1;
            await taxiwar_script_cut();  // SCM GOSUB taxiwar_script_cut
            Text.PrintBig("TAXI_1", 15000, 2); //"taxiwar mission 1"
            if ($.flag_taxi1_mission_launched == 0) {
              // LoadLaunchMission taxiwar1.sc
              $.flag_taxi1_mission_launched = 1;
            }
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → taxiwar1_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO taxiwar1_loop_inner"); // fallback: would break linear control flow
          }
          while ($.player1.locateInCar3D($.taxiwarX, $.taxiwarY, $.taxiwarZ, 2.0, 2.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → taxiwar1_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO taxiwar1_loop_inner"); // fallback: would break linear control flow
            }


          }
        }
      }
      if ($.player1.locateOnFoot3D($.taxiwarX, $.taxiwarY, $.taxiwarZ, 1.0, 2.0, 2.0, false /* FALSE */)) {
        Text.PrintNow("NOTAXI", 1000, 2);
      }


    }





  }
}




// taxiwar Mission 2


async function taxiwar_mission2_loop() {



  // SCRIPT_NAME TWAR2
}



async function taxiwar2_loop_inner() {
  // SCM GOTO → taxiwar2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_taxiwar_mission2_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.isInModel(kaufman) && $.player1.locateInCar3D($.taxiwarX, $.taxiwarY, $.taxiwarZ, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            $.been_in_a_taxi_before = 1;
            await taxiwar_script_cut();  // SCM GOSUB taxiwar_script_cut
            Text.PrintBig("TAXI_2", 15000, 2); //"taxiwar mission 2"
            if ($.flag_taxi1_mission_launched == 0) {
              // LoadLaunchMission taxiwar2.sc
              $.flag_taxi1_mission_launched = 1;
            }
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → taxiwar2_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO taxiwar2_loop_inner"); // fallback: would break linear control flow
          }
          while ($.player1.locateInCar3D($.taxiwarX, $.taxiwarY, $.taxiwarZ, 2.0, 2.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → taxiwar2_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO taxiwar2_loop_inner"); // fallback: would break linear control flow
            }


          }


        }
      }
      if ($.player1.locateOnFoot3D($.taxiwarX, $.taxiwarY, $.taxiwarZ, 1.0, 2.0, 2.0, false /* FALSE */)) {
        Text.PrintNow("NOTAXI", 1000, 2);
      }


    }




  }
}




async function taxiwar_mission3_loop() {



  // SCRIPT_NAME TWAR3
}



async function taxiwar3_loop_inner() {
  // SCM GOTO → taxiwar3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_taxiwar_mission3_passed == 1) {
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.isInModel(kaufman) && $.player1.locateInCar3D($.taxiwarX, $.taxiwarY, $.taxiwarZ, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            $.been_in_a_taxi_before = 1;
            await taxiwar_script_cut();  // SCM GOSUB taxiwar_script_cut
            Text.PrintBig("TAXI_3", 15000, 2); //"taxiwar mission 3"
            if ($.flag_taxi1_mission_launched == 0) {
              // LoadLaunchMission taxiwar3.sc
              $.flag_taxi1_mission_launched = 1;
            }
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → taxiwar3_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO taxiwar3_loop_inner"); // fallback: would break linear control flow
          }
          while ($.player1.locateInCar3D($.taxiwarX, $.taxiwarY, $.taxiwarZ, 2.0, 2.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → taxiwar3_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO taxiwar3_loop_inner"); // fallback: would break linear control flow
            }


          }
        }
      }
      if ($.player1.locateOnFoot3D($.taxiwarX, $.taxiwarY, $.taxiwarZ, 1.0, 2.0, 2.0, false /* FALSE */)) {
        Text.PrintNow("NOTAXI", 1000, 2);
      }


    }




  }
}



// ************************************************************************************************************
// ********************************************Taxi Mission 1**************************************************

// Taxi Mission 1


async function taxi_mission1_loop() {


  // SCRIPT_NAME taxi_l
}



async function taxi_mission1_loop_inner() {
  // SCM GOTO → taxi_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if (!($.player1.isInShortcutTaxi())) {
        if ($.player1.isInTaxi()) {
          if (ONMISSION == 0) {
            $.controlmode = Pad.GetControllerMode();
            if ($.car_help_played == 1) {
              if ($.been_in_a_taxi_before == 0) {
                if (!($.controlmode == 3)) {
                  Text.PrintHelp("TTUTOR"); //Press RIGHTSHOCK to start
                }
                else {
                  Text.PrintHelp("TTUTOR2"); //Press RIGHTSHOCK to start
                }
                $.been_in_a_taxi_before = 1;
              }
            }
            if (!($.controlmode == 3)) {
              if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
                while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
                  await asyncWait(0);
                  if (!($.player1.isPlaying()) || !($.player1.isInTaxi())) {
                    // SCM GOTO → taxi_mission1_loop (not lowered; manual jump required)
                    throw new Error("unresolved GOTO taxi_mission1_loop"); // fallback: would break linear control flow
                  }
                }
                Text.PrintBig("TAXI_M", 6000, 5);
                await asyncWait(0);
                if ($.flag_taxi1_mission_launched == 0) {
                  // LoadLaunchMission taxi1.sc
                  $.flag_taxi1_mission_launched = 1;
                }
              }
            }
            else {
              if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
                while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
                  await asyncWait(0);
                  if (!($.player1.isPlaying()) || !($.player1.isInTaxi())) {
                    // SCM GOTO → taxi_mission1_loop (not lowered; manual jump required)
                    throw new Error("unresolved GOTO taxi_mission1_loop"); // fallback: would break linear control flow
                  }
                }
                Text.PrintBig("TAXI_M", 6000, 5);
                await asyncWait(0);
                if ($.flag_taxi1_mission_launched == 0) {
                  // LoadLaunchMission taxi1.sc
                  $.flag_taxi1_mission_launched = 1;
                }
              }
            }


          }
        }
        else {
          if ($.been_in_a_taxi_before == 1) {
            Text.ClearHelp();
            $.been_in_a_taxi_before = 0;
          }
        }


      }


    }


  }
}



// ************************************************************************************************************
// ************************************** Ambulance Mission ***************************************************
//
// Ambulance Mission



async function ambulance_mission_loop() {


  // SCRIPT_NAME ambula
}



async function ambulance_mission_loop_inner() {
  // SCM GOTO → ambulance_mission_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.player1.isInModel(ambulan)) {
        if (ONMISSION == 0 && $.flag_player_on_ambulance_mission == 0) {
          $.controlmode = Pad.GetControllerMode();
          if ($.car_help_played == 1) {
            if ($.been_in_ambulance_before == 0) {
              if (!($.controlmode == 3)) {
                Text.PrintHelp("ATUTOR"); //Press RIGHTSHOCK to start
              }
              else {
                Text.PrintHelp("ATUTOR3"); //Press RIGHTSHOCK to start
              }
              $.been_in_ambulance_before = 1;
            }
          }
          if (!($.controlmode == 3)) {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
              while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
                await asyncWait(0);
                if (!($.player1.isPlaying()) || !($.player1.isInModel(ambulan))) {
                  // SCM GOTO → ambulance_mission_loop (not lowered; manual jump required)
                  throw new Error("unresolved GOTO ambulance_mission_loop"); // fallback: would break linear control flow
                }
              }
              Text.PrintBig("AMBUL_M", 6000, 5);
              await asyncWait(0);
              // LoadLaunchMission ambulance.sc
              $.been_in_ambulance_before = 1;
            }
          }
          else {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
              while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
                await asyncWait(0);
                if (!($.player1.isPlaying()) || !($.player1.isInModel(ambulan))) {
                  // SCM GOTO → ambulance_mission_loop (not lowered; manual jump required)
                  throw new Error("unresolved GOTO ambulance_mission_loop"); // fallback: would break linear control flow
                }
              }
              Text.PrintBig("AMBUL_M", 6000, 5);
              await asyncWait(0);
              // LoadLaunchMission ambulance.sc
              $.been_in_ambulance_before = 1;
            }
          }


        }
      }
      else {
        if ($.been_in_ambulance_before == 1) {
          Text.ClearHelp();
          $.been_in_ambulance_before = 0;
        }
      }
    }


  }
}




// ************************************************************************************************************
// ******************************************Fire Mission 1****************************************************
//
// Fire Mission 1


async function fire_truck_mission_loop() {


  // SCRIPT_NAME fire
}



async function fire_truck_mission_loop_inner() {
  // SCM GOTO → fire_truck_mission_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.player1.isInModel(firetruk)) {
        if (ONMISSION == 0 && $.flag_player_on_fire_mission == 0) {
          $.controlmode = Pad.GetControllerMode();
          if ($.car_help_played == 1) {
            if ($.been_in_a_firetruk_before == 0) {
              if (!($.controlmode == 3)) {
                Text.PrintHelp("FTUTOR"); //Press RIGHTSHOCK to start
              }
              else {
                Text.PrintHelp("FTUTOR2"); //Press RIGHTSHOCK to start
              }
              $.been_in_a_firetruk_before = 1;
            }
          }
          if (!($.controlmode == 3)) {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
              while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
                await asyncWait(0);
                if (!($.player1.isPlaying()) || !($.player1.isInModel(firetruk))) {
                  // SCM GOTO → fire_truck_mission_loop (not lowered; manual jump required)
                  throw new Error("unresolved GOTO fire_truck_mission_loop"); // fallback: would break linear control flow
                }
              }
              Text.PrintBig("FIRE_M", 6000, 5);
              await asyncWait(0);
              // LoadLaunchMission firetruck.sc
              $.been_in_a_firetruk_before = 1;
            }
          }
          else {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
              while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
                await asyncWait(0);
                if (!($.player1.isPlaying()) || !($.player1.isInModel(firetruk))) {
                  // SCM GOTO → fire_truck_mission_loop (not lowered; manual jump required)
                  throw new Error("unresolved GOTO fire_truck_mission_loop"); // fallback: would break linear control flow
                }
              }
              Text.PrintBig("FIRE_M", 6000, 5);
              await asyncWait(0);
              // LoadLaunchMission firetruck.sc
              $.been_in_a_firetruk_before = 1;
            }
          }


        }
      }
      else {
        if ($.been_in_a_firetruk_before == 1) {
          Text.ClearHelp();
          $.been_in_a_firetruk_before = 0;
        }
      }
    }


  }
}




// ************************************************************************************************************
// **************************************** Cop Car Mission ***************************************************
//
// Cop Car Mission


async function cop_mission_loop() {


  // SCRIPT_NAME cop
}



async function cop_mission_loop_inner() {
  // SCM GOTO → cop_mission_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.scplayer.isInAnyPoliceVehicle() || $.player1.isInModel(HUNTER) || $.player1.isInModel(FBICAR)) {
        if (ONMISSION == 0) {
          $.controlmode = Pad.GetControllerMode();
          if ($.car_help_played == 1) {
            if ($.been_in_a_copcar_before == 0) {
              if (!($.controlmode == 3)) {
                Text.PrintHelp("CTUTOR"); //Press RIGHTSHOCK to start
              }
              else {
                Text.PrintHelp("CTUTOR2"); //Press RIGHTSHOCK to start
              }
              $.been_in_a_copcar_before = 1;
            }
          }
          if (!($.controlmode == 3)) {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
              while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
                await asyncWait(0);
                if (!($.player1.isPlaying())) {
                  // SCM GOTO → cop_mission_loop (not lowered; manual jump required)
                  throw new Error("unresolved GOTO cop_mission_loop"); // fallback: would break linear control flow
                }
                if (!($.scplayer.isInAnyPoliceVehicle()) && !($.player1.isInModel(HUNTER)) && !($.player1.isInModel(FBICAR))) {
                  // SCM GOTO → cop_mission_loop (not lowered; manual jump required)
                  throw new Error("unresolved GOTO cop_mission_loop"); // fallback: would break linear control flow
                }
              }
              if ($.player1.isInModel(HUNTER)) {
                Text.PrintBig("COP_M3", 6000, 5);
              }
              else {
                if ($.player1.isInModel(CHEETAH)) {
                  Text.PrintBig("COP_M2", 6000, 5);
                }
                else {
                  Text.PrintBig("COP_M", 6000, 5);
                }
              }
              await asyncWait(0);
              // LoadLaunchMission copcar.sc
              $.been_in_a_copcar_before = 1;
            }
          }
          else {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
              while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
                await asyncWait(0);
                if (!($.player1.isPlaying())) {
                  // SCM GOTO → cop_mission_loop (not lowered; manual jump required)
                  throw new Error("unresolved GOTO cop_mission_loop"); // fallback: would break linear control flow
                }
                if (!($.scplayer.isInAnyPoliceVehicle()) && !($.player1.isInModel(HUNTER)) && !($.player1.isInModel(FBICAR))) {
                  // SCM GOTO → cop_mission_loop (not lowered; manual jump required)
                  throw new Error("unresolved GOTO cop_mission_loop"); // fallback: would break linear control flow
                }
              }
              if ($.player1.isInModel(HUNTER)) {
                Text.PrintBig("COP_M3", 6000, 5);
              }
              else {
                if ($.player1.isInModel(CHEETAH)) {
                  Text.PrintBig("COP_M2", 6000, 5);
                }
                else {
                  Text.PrintBig("COP_M", 6000, 5);
                }
              }
              await asyncWait(0);
              // LoadLaunchMission copcar.sc
              $.been_in_a_copcar_before = 1;
            }
          }


        }
      }
      else {
        if ($.been_in_a_copcar_before == 1) {
          Text.ClearHelp();
          $.been_in_a_copcar_before = 0;
        }
      }
    }


  }
}



// ************************************************************************************************************
// *****************************************  STADIUM SCRIPT  *************************************************

// Assasin Mission 5


async function stadium_loop() {





  // SCRIPT_NAME stadium
}



async function stadium_loop_inner() {
  // SCM GOTO → stadium_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    const _res497 = Clock.GetTimeOfDay();
$.hours_s = _res497.hours;
$.minutes_s = _res497.minutes;
    if ($.hours_s > 19) {
      if (ONMISSION == 0) {
        if ($.player1.isPlaying()) {
          if ($.player1.canStartMission()) {
            if ($.day_flag == 0) {
              $.day_flag = 1;
            }
            if ($.flag_stadium_doors == 1) {
              $.stadium_door_1.setHeading(90.0);
              $.stadium_door_2.setHeading(-90.0);
              $.flag_stadium_doors = 0;
            }
            if ($.player1.locateOnFoot3D(-1110.3314, 1331.0956, 20.1119, 2.0, 2.0, 2.0, false /* FALSE */)) {
              ONMISSION = 1;
              Camera.SetFadingColor(0, 0, 0);
              Camera.DoFade(1500, 0 /* FADE_OUT */);
              if ($.day_counter == 0) {
                ONMISSION = 1;
                Text.PrintBig("HOTRNG", 15000, 2); //"HOT RING"
                await get_fading_status();  // SCM GOSUB get_fading_status
                // LoadLaunchMission ovalring.sc
              }
              if ($.day_counter == 1) {
                ONMISSION = 1;
                Text.PrintBig("BLODRNG", 15000, 2); //"BLOOD RING"
                await get_fading_status();  // SCM GOSUB get_fading_status
                // LoadLaunchMission mm.sc
              }
              if ($.day_counter == 2) {
                ONMISSION = 1;
                Text.PrintBig("DIRTRNG", 15000, 2); //"DIRT RING"
                await get_fading_status();  // SCM GOSUB get_fading_status
                // LoadLaunchMission kickstart.sc
              }
            }
          }
        }
      }
      else {
        if ($.flag_stadium_doors == 0) {
          if ($.player1.isPlaying()) {
            if (!($.player1.isInArea3D(-1118.978, 1326.515, 19.076, -1108.978, 1335.515, 23.076, false))) {
              $.stadium_door_1.setHeading(0.0);
              $.stadium_door_2.setHeading(0.0);
              $.flag_stadium_doors = 1;
            }
          }
        }
      }
    }
    else {
      if ($.flag_stadium_doors == 0) {
        if ($.player1.isPlaying()) {
          if (!($.player1.isInArea3D(-1118.978, 1326.515, 19.076, -1108.978, 1335.515, 23.076, false))) {
            $.stadium_door_1.setHeading(0.0);
            $.stadium_door_2.setHeading(0.0);
            $.flag_stadium_doors = 1;
          }
        }
      }
      if ($.day_flag == 1) {
        ++$.day_counter;
        if ($.day_counter == 3) {
          $.day_counter = 0;
        }
        if ($.day_counter == 0) {
          $.stadium_poster.delete();
          $.stadium_poster = ScriptObject.CreateNoOffset(dthotring_a, -1037.08, 1340.258, 36.552);
          $.stadium_poster.dontRemove();
          World.SetTonightsEvent(0);
        }
        if ($.day_counter == 1) {
          $.stadium_poster.delete();
          $.stadium_poster = ScriptObject.CreateNoOffset(dtbloodring_a, -1037.08, 1340.258, 36.552);
          $.stadium_poster.dontRemove();
          World.SetTonightsEvent(1);
        }
        if ($.day_counter == 2) {
          $.stadium_poster.delete();
          $.stadium_poster = ScriptObject.CreateNoOffset(dtdirtring_a, -1037.08, 1340.258, 36.552);
          $.stadium_poster.dontRemove();
          World.SetTonightsEvent(2);
        }
        $.day_flag = 0;
      }
    }




  }
}



// ************************************************************************************************************
// ***********************************************  Races  ****************************************************



async function races_loop() {


  // SCRIPT_NAME races
}



async function races_loop_inner() {
  // SCM GOTO → races_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.canStartMission()) {
          if ($.player1.locateOnFoot3D(-967.7050, -827.3005, 5.7702, 1.5, 2.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            // LoadLaunchMission races.sc
          }
        }
      }
    }


  }
}



// ************************************************************************************************************
// ********************************************Ice cream Mission1**************************************************

// Icecream Mission 1


async function icecream_mission1_loop() {



  // SCRIPT_NAME ICE1
}



async function icecream1_loop_inner() {
  // SCM GOTO → icecream1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_icecream_mission1_passed == 1) {
      //TURN_PHONE_OFF icecream_phone
      return; // TERMINATE_THIS_SCRIPT
    }


    if ($.player1.isPlaying()) {
      if ($.player1.isInModel(mrwhoop) && $.player1.locateInCar3D($.icecreamX, $.icecreamY, $.icecreamZ, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            Text.PrintBig("CREAM", 15000, 2); //"icecream mission 1"
            $.player1.setControl(false /* OFF */);
            Hud.SwitchWidescreen(true /* ON */);
            // LoadLaunchMission icecream1.sc
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → icecream1_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO icecream1_loop_inner"); // fallback: would break linear control flow
          }
          while ($.player1.locateInCar3D($.icecreamX, $.icecreamY, $.icecreamZ, 2.0, 2.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → icecream1_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO icecream1_loop_inner"); // fallback: would break linear control flow
            }


          }


        }
      }
    }




  }
}




// ************************************************************************************************************
// ********************************************Heli Mission1**************************************************

// heli Mission 1


async function heli_mission1_loop() {



  // SCRIPT_NAME HELI1
}



async function heli1_loop_inner() {
  // SCM GOTO → heli1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if ($.player1.isInModel(SPARROW) && $.player1.locateInCar3D($.heli1X, $.heli1Y, $.heli1Z, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            Text.PrintBig("HELI_1", 15000, 5); //"heli mission 1"
            // LoadLaunchMission heli1.sc
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → heli1_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO heli1_loop_inner"); // fallback: would break linear control flow
          }
          while ($.player1.locateInCar3D($.heli1X, $.heli1Y, $.heli1Z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → heli1_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO heli1_loop_inner"); // fallback: would break linear control flow
            }


          }


        }
      }
    }




  }
}



// ************************************************************************************************************
// ********************************************Heli Mission2**************************************************

// heli Mission 2


async function heli_mission2_loop() {



  // SCRIPT_NAME HELI2
}



async function heli2_loop_inner() {
  // SCM GOTO → heli2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if ($.player1.isInModel(SPARROW) && $.player1.locateInCar3D($.heli2X, $.heli2Y, $.heli2Z, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            Text.PrintBig("HELI_2", 15000, 5); //"heli mission 2"
            // LoadLaunchMission heli2.sc
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → heli2_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO heli2_loop_inner"); // fallback: would break linear control flow
          }
          while ($.player1.locateInCar3D($.heli2X, $.heli2Y, $.heli2Z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → heli2_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO heli2_loop_inner"); // fallback: would break linear control flow
            }


          }


        }
      }
    }




  }
}




// ************************************************************************************************************
// ********************************************Heli Mission3**************************************************

// heli Mission 3


async function heli_mission3_loop() {



  // SCRIPT_NAME HELI3
}



async function heli3_loop_inner() {
  // SCM GOTO → heli3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if ($.player1.isInModel(sparrow) && $.player1.locateInCar3D($.heli3X, $.heli3Y, $.heli3Z, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            Text.PrintBig("HELI_3", 15000, 5); //"heli mission 3"
            // LoadLaunchMission heli3.sc
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → heli3_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO heli3_loop_inner"); // fallback: would break linear control flow
          }
          while ($.player1.locateInCar3D($.heli3X, $.heli3Y, $.heli3Z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → heli3_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO heli3_loop_inner"); // fallback: would break linear control flow
            }


          }


        }
      }
    }




  }
}




// ************************************************************************************************************
// ********************************************Heli Mission4**************************************************

// heli Mission 4


async function heli_mission4_loop() {



  // SCRIPT_NAME HELI4
}



async function heli4_loop_inner() {
  // SCM GOTO → heli4_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if ($.player1.isInModel(sparrow) && $.player1.locateInCar3D($.heli4X, $.heli4Y, $.heli4Z, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if (ONMISSION == 0) {
          if ($.player1.canStartMission()) {
            Text.PrintBig("HELI_4", 15000, 5); //"heli mission 4"
            // LoadLaunchMission heli4.sc
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → heli4_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO heli4_loop_inner"); // fallback: would break linear control flow
          }
          while ($.player1.locateInCar3D($.heli4X, $.heli4Y, $.heli4Z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player1.isPlaying())) {
              // SCM GOTO → heli4_loop_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO heli4_loop_inner"); // fallback: would break linear control flow
            }


          }


        }
      }
    }




  }
}




// ************************************************************************************************************
// *******************************************BMX MISSIONS*****************************************************


async function BMX_loop() {


  // SCRIPT_NAME BMXLOOP
}



async function BMX_loop_inner() {
  // SCM GOTO → BMX_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        //AND IS_PLAYER_IN_ZONE player1 S_VIEW

        if ($.player1.isInModel(sanchez) || $.player1.isInModel(landstal)) {
          if (!($.player1.isInArea3D(-430.0, 1405.0, 8.5, -420.0, 1415.0, 12.5, false /* false */))) {
            $.bmx_1_trigger = 1;
          }
        }
        if ($.bmx_1_trigger == 0) {
          if ($.player1.isInModel(sanchez)) {
            Text.PrintBig("BMX_1", 15000, 2);
            //WAIT 0
            // LoadLaunchMission bmx_1.sc
          }
          if ($.player1.isInModel(landstal)) {
            Text.PrintBig("BMX_2", 15000, 2);
            //WAIT 0
            // LoadLaunchMission bmx_2.sc
          }
        }
        if ($.player1.isPlaying()) {
          if (!($.player1.isInAnyCar())) {
            $.bmx_1_trigger = 0;
          }
        }


      }


    }


  }
}



// *******************************************4x4 Missions*****************************************************


async function t4x4_mission1_loop() {


  // SCRIPT_NAME o4x4_1
}



async function t4x4_mission1_loop_inner() {
  // SCM GOTO → t4x4_mission1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_4x4_mission1_passed == 0) {
      $.record_4x4_one = 300;
    }


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0 && $.player1.isInZone("BEACH3")) {
        if ($.player1.isInModel(pcj600) && !($.player1.isInArea3D(504.4, -311.8, 12.0, 510.4, -305.8, 14.0, false /* false */))) {
          $.flag_4x4one_trigger = 1;
        }
        if (!($.player1.isInAnyCar())) {
          $.flag_4x4one_trigger = 0;
        }
        if ($.player1.isInModel(pcj600) && $.flag_4x4one_trigger == 0) {
          $.flag_launch_4x4_1_ok = 1;
        }
        if ($.flag_launch_4x4_1_ok == 1) {
          Text.PrintBig("T4X4_1", 15000, 2);
          await asyncWait(0);
          // LoadLaunchMission miami_4x4_1.sc
        }



      }


    }


  }
}





async function carpark1_loop() {


  // SCRIPT_NAME multi
}



async function carpark1_loop_inner() {
  // SCM GOTO → carpark1_loop_inner lowered to endless loop
  while (true) {



    await asyncWait($.mission_trigger_wait_time);


    if ($.flag_carpark1_passed == 0) {
      $.record_carpark1 = 120;
    }


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        //AND IS_PLAYER_IN_ZONE player1 COM_EAS

        if ($.player1.isInModel(STALLION) && !($.player1.isInArea3D(125.0, -1155.0, 27.0, 130.0, -1160.0, 33.0, false /* false */))) {
          $.flag_carpark1_trigger = 1;
        }
        if ($.player1.isInModel(STALLION) && $.flag_carpark1_trigger == 0) {
          Text.PrintBig("MM_1", 15000, 2);
          await asyncWait(0);
          // LoadLaunchMission carpark_1.sc
        }
        if ($.player1.isPlaying()) {
          if (!($.player1.isInAnyCar())) {
            $.flag_carpark1_trigger = 0;
          }
        }


      }


    }




  }
}



// ************************************************************************************************************
// ************************************** Pizza delivery Mission ***********************************************

async function pizza_delivery_loop() {
  // SCM GOTO → pizza_delivery_loop lowered to endless loop
  while (true) {




    // SCRIPT_NAME PIZZ
    await asyncWait($.mission_trigger_wait_time);
    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.flag_pizza_mission_passed == 0) {
          if ($.player1.isInModel(pizzaboy) && !($.player1.isInArea3D(-894.1, 798.7, 1.0, -914.1, 818.7, 21.0, false /* false */)) && !($.player1.isInArea3D(-1018.7, 78.6, 1.2, -1038.7, 98.6, 21.2, false /* false */)) && !($.player1.isInArea3D(403.8, 87.7, 0.9, 423.8, 107.7, 20.9, false /* false */))) {
            $.flag_pizza_trigger = 1;
          }
          if ($.player1.isInModel(pizzaboy) && $.flag_pizza_trigger == 0) {
            Text.PrintBig("PIZ1_A", 15000, 2); //PIZZA BOY MISSION
            await asyncWait(0);
            // LoadLaunchMission pizza.sc
          }
          if ($.player1.isPlaying()) {
            if (!($.player1.isInAnyCar())) {
              $.flag_pizza_trigger = 0;
            }
          }
        }
      }
    }




  }
}



// ************************************************************************************************************
// *********************************************** RC Heli Checkpoint Pickup ***********************************


async function rchelipickup_loop() {


  // SCRIPT_NAME RCHELY1
}



async function rchelipickup_loop_inner() {
  // SCM GOTO → rchelipickup_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.isInModel(topfun)) {
          if ($.has_player_just_done_rcheli_mission == 0) {
            if ($.player1.locateAnyMeans2D(-1235.1, -1235.7, 4.0, 4.0, false /* FALSE */)) {
              if ($.player1.isSittingInAnyCar()) {
                $.player1.setControl(false /* OFF */);
                await asyncWait(100);
                Camera.SetFadingColor(0, 0, 0);
                Camera.DoFade(1500, 0 /* FADE_OUT */);
                Text.PrintBig("RCH1_11", 15000, 2); //RC heli pickup
                await get_fading_status();  // SCM GOSUB get_fading_status
                // LoadLaunchMission rcheli1.sc
              }
            }
          }
        }
      }
    }



    if ($.player1.isPlaying()) {
      if (!($.player1.isInModel(topfun))) {
        $.has_player_just_done_rcheli_mission = 0;
      }
    }






  }
}




// ************************************************************************************************************
// *********************************************** RC Buggy Checkpoint Race ***********************************


async function rc_race_checkpoint_loop() {


  // SCRIPT_NAME RC_RACE
}



async function rc_race_checkpoint_loop_inner() {
  // SCM GOTO → rc_race_checkpoint_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        //AND IS_PLAYER_IN_ZONE player1 S_VIEW
        if ($.player1.isInModel(topfun)) {
          if ($.has_player_just_done_rcrace_mission == 0) {
            if ($.player1.locateAnyMeans2D(718.4650, 701.3998, 3.0, 3.0, false /* FALSE */)) {
              if ($.player1.isSittingInAnyCar()) {
                $.player1.setControl(false /* OFF */);
                await asyncWait(100);
                Camera.SetFadingColor(0, 0, 0);
                Camera.DoFade(1500, 0 /* FADE_OUT */);
                Text.PrintBig("RCR1_5", 15000, 2); //RC Bandit Race
                await get_fading_status();  // SCM GOSUB get_fading_status
                // LoadLaunchMission rcrace1.sc
              }
            }
          }
        }
      }
    }



    if ($.player1.isPlaying()) {
      if (!($.player1.isInModel(topfun))) {
        $.has_player_just_done_rcrace_mission = 0;
      }
    }




  }
}




// ************************************************************************************************************
// *********************************************** RC Plane Checkpoint Race ***********************************



async function rc_plane_race_checkpoint_loop() {


  // SCRIPT_NAME RC_PLNE
}



async function rc_plane_race_checkpoint_loop_inner() {
  // SCM GOTO → rc_plane_race_checkpoint_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        //AND IS_PLAYER_IN_ZONE player1 S_VIEW
        if ($.player1.isInModel(topfun)) {
          if ($.has_player_just_done_rcplane_mission == 0) {
            if ($.player1.locateAnyMeans3D(307.917, 1254.622, 27.595, 4.0, 4.0, 4.0, false /* FALSE */)) {
              if ($.player1.isSittingInAnyCar()) {
                $.player1.setControl(false /* OFF */);
                await asyncWait(100);
                Camera.SetFadingColor(0, 0, 0);
                Camera.DoFade(1500, 0 /* FADE_OUT */);
                Text.PrintBig("RCPL1_7", 15000, 2); //rc plane checkpoint
                await get_fading_status();  // SCM GOSUB get_fading_status
                // LoadLaunchMission rcplne1.sc
              }
            }
          }
        }
      }
    }



    if ($.player1.isPlaying()) {
      if (!($.player1.isInModel(topfun))) {
        $.has_player_just_done_rcplane_mission = 0;
      }
    }




  }
}




// ************************************************************************************************************
// *********************************************** Boat Yard Oddjob *******************************************



async function boatyard_oddjob_loop() {


  // SCRIPT_NAME COKRUN
}



async function boatyard_oddjob_loop_inner() {
  // SCM GOTO → boatyard_oddjob_loop_inner lowered to endless loop
  while (true) {


    await asyncWait($.mission_trigger_wait_time);


    if ($.player1.isPlaying()) {
      if (ONMISSION == 0) {
        if ($.player1.isInModel(squalo) || $.player1.isInModel(jetmax)) {
          if (!($.player1.locateAnyMeans3D(-585.8, -1506.8, 5.0, 14.0, 14.0, 4.0, false /* FALSE */))) {
            $.cokerun_trigger = 1;
          }
        }
        if ($.cokerun_trigger == 0) {
          if ($.player1.isInModel(squalo) || $.player1.isInModel(jetmax)) {
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1000, 0 /* FADE_OUT */);
            Text.PrintBig("BOAT_N", 15000, 2);
            $.player1.setControl(false /* OFF */);
            await get_fading_status();  // SCM GOSUB get_fading_status
            // LoadLaunchMission cokerun.sc
          }
        }
        if ($.player1.isPlaying()) {
          if (!($.player1.isInAnyCar())) {
            $.cokerun_trigger = 0;
          }
        }
        while ($.player1.locateInCar3D(-585.8, -1506.8, 5.0, 14.0, 14.0, 4.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player1.isPlaying())) {
            // SCM GOTO → boatyard_oddjob_loop_inner (not lowered; manual jump required)
            throw new Error("unresolved GOTO boatyard_oddjob_loop_inner"); // fallback: would break linear control flow
          }


        }


      }


    }



  }
}




// ************************************************************************************************************
// ************************************************************************************************************
// *******************************************END OF MISSIONS**************************************************
// ************************************************************************************************************
// ************************************************************************************************************

// *******************************************HOTEL SAVE LOOP**************************************************

async function hotel_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME PSAVE1
}



async function hotel_save_loop_inner() {
  // SCM GOTO → hotel_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("BEACH1")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_hotel_pickup == 0) {
              $.hotel_save_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, 219.3, -1273.5, 11.5); //Hotel lobby
              $.remove_hotel_pickup = 1;
            }
            if ($.hotel_save_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game

              //CLEAR_AREA 233.8 -1279.0 11.1 1.0 TRUE

              if ($.player1.isPlaying()) {
                $.hotel_save_pickup.remove();
                $.hotel_save_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, 219.3, -1273.5, 11.5); //Hotel lobby
                Camera.DoFade(1000, 1 /* FADE_IN */);
                if ($.flag_hotel_mission1_passed == 0) {
                  World.ClearArea(220.3, -1275.5, 11.0, 1.0, true /* TRUE */);
                  $.player1.setCoordinates(220.3, -1275.5, 11.0);
                  $.player1.setHeading(121.0);
                  Camera.SetFixedPosition(223.301, -1277.655, 13.822, 0.0, 0.0, 0.0);
                  Camera.PointAtPoint(222.563, -1278.279, 13.565, 2 /* JUMP_CUT */);
                  Text.PrintHelp("HELP19"); //Continue the game
                  TIMERA = 0;
                  while (!(TIMERA > 2000)) {
                    await asyncWait(0);
                    if (TIMERA > 500) {
                      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
                        // SCM GOTO → skip_pink_help (not lowered; manual jump required)
                        throw new Error("unresolved GOTO skip_pink_help"); // fallback: would break linear control flow
                      }
                    }


                  }
                  // SCM label skip_pink_help
                }
                else {
                  World.ClearArea(223.1, -1276.7, 11.0, 1.0, true /* TRUE */);
                  $.player1.setCoordinates(223.1, -1276.7, 11.0);
                  $.player1.setHeading(258.0);
                }


                Camera.RestoreJumpcut();
                Camera.SetBehindPlayer();
              }
              await asyncWait(500);
              if ($.player1.isPlaying()) {
                $.player1.setControl(true /* on */);
                ONMISSION = 0;
              }


            }
          }
          else {
            if ($.remove_hotel_pickup == 1) {
              $.hotel_save_pickup.remove();
              $.remove_hotel_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************MANSION SAVE LOOP*********************************************

async function mansion_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME PSAVE2
}



async function mansion_save_loop_inner() {
  // SCM GOTO → mansion_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("STARI")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_mansion_pickup == 0) {
              $.mansion_save_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -378.3, -597.2, 25.8);
              $.remove_mansion_pickup = 1;
            }
            if ($.mansion_save_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.mansion_save_pickup.remove();
                $.mansion_save_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -378.3, -597.2, 25.8); //mansion_save lobby
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(-378.3, -592.3, 25.3, 1.0, true /* TRUE */);
                $.player1.setCoordinates(-378.5, -589.1, 24.6);
                $.player1.setHeading(0.0);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_mansion_pickup == 1) {
              $.mansion_save_pickup.remove();
              $.remove_mansion_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************CARSHOW SAVE LOOP*********************************************

async function carshow_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME PSAVE3
}



async function carshow_save_loop_inner() {
  // SCM GOTO → carshow_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("HAVANA")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_carshow_pickup == 0) {
              $.carshow_save_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -1033.8, -846.9, 13.0);
              $.remove_carshow_pickup = 1;
            }
            if ($.carshow_save_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.carshow_save_pickup.remove();
                $.carshow_save_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -1033.8, -846.9, 13.0); //carshow_save lobby
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(-1028.3, -851.9, 12.3, 1.0, true /* TRUE */);
                $.player1.setCoordinates(-1028.3, -851.9, 12.3);
                $.player1.setHeading(226.0);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_carshow_pickup == 1) {
              $.carshow_save_pickup.remove();
              $.remove_carshow_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************TAXIWAR SAVE LOOP*********************************************

async function taxiwar_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME PSAVE4
}



async function taxiwar_save_loop_inner() {
  // SCM GOTO → taxiwar_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("HAITI")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_taxiwar_save_pickup == 0) {
              $.taxiwar_save_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -992.7, 193.4, 11.4);
              $.remove_taxiwar_save_pickup = 1;
            }
            if ($.taxiwar_save_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.taxiwar_save_pickup.remove();
                $.taxiwar_save_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -992.7, 193.4, 11.4); //carshow_save lobby
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(-996.5, 194.1, 10.6, 1.0, true /* TRUE */);
                $.player1.setCoordinates(-996.5, 194.1, 10.6);
                $.player1.setHeading(80.0);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_taxiwar_save_pickup == 1) {
              $.taxiwar_save_pickup.remove();
              $.remove_taxiwar_save_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************STRIPCLUB SAVE LOOP*********************************************

async function strpbuy_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME PSAVE5
}



async function strpbuy_save_loop_inner() {
  // SCM GOTO → strpbuy_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("BEACH1")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_strpbuy_pickup == 0) {
              $.strpbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.strpbuyX, $.strpbuyY, $.strpbuyZ);
              $.remove_strpbuy_pickup = 1;
            }
            if ($.strpbuy_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.strpbuy_pickup.remove();
                $.strpbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.strpbuyX, $.strpbuyY, $.strpbuyZ); //carshow_save lobby
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(100.9297, -1470.6222, 9.3871, 1.0, true /* TRUE */);
                $.player1.setCoordinates(100.9297, -1470.6222, 9.3871);
                $.player1.setHeading(218.0275);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_strpbuy_pickup == 1) {
              $.strpbuy_pickup.remove();
              $.remove_strpbuy_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************BOATYARD SAVE LOOP*********************************************

async function boatbuy_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME PSAVE6
}



async function boatbuy_save_loop_inner() {
  // SCM GOTO → boatbuy_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("DOCKS")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_boatbuy_pickup == 0) {
              $.boatbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -664.1, -1476.3, 13.8);
              $.remove_boatbuy_pickup = 1;
            }
            if ($.boatbuy_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.boatbuy_pickup.remove();
                $.boatbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -664.1, -1476.3, 13.8);
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(-660.0, -1477.8, 13.0, 1.0, true /* TRUE */);
                $.player1.setCoordinates(-660.0, -1477.8, 13.0);
                $.player1.setHeading(248.0);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_boatbuy_pickup == 1) {
              $.boatbuy_pickup.remove();
              $.remove_boatbuy_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************ICECREAM SAVE LOOP*********************************************

async function icecream_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME PSAVE7
}



async function icecream_save_loop_inner() {
  // SCM GOTO → icecream_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("HAVANA")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_icecream_pickup == 0) {
              $.icebuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -878.5, -575.1, 11.2);
              $.remove_icecream_pickup = 1;
            }
            if ($.icebuy_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.icebuy_pickup.remove();
                $.icebuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -878.5, -575.1, 11.2);
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(-872.0, -573.4, 10.4, 1.0, true /* TRUE */);
                $.player1.setCoordinates(-872.0, -573.4, 10.4);
                $.player1.setHeading(277.0);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_icecream_pickup == 1) {
              $.icebuy_pickup.remove();
              $.remove_icecream_pickup = 0;
            }
          }
        }
      }
    }


  }
}




// **********************************PRINTERS SAVE LOOP*********************************************

async function printers_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME PSAVE8
}



async function printers_save_loop_inner() {
  // SCM GOTO → printers_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("HAVANA")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_printers_pickup == 0) {
              $.printers_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -1059.6, -282.2, 11.2);
              $.remove_printers_pickup = 1;
            }
            if ($.printers_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.printers_pickup.remove();
                $.printers_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -1059.6, -282.2, 11.2);
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(-1056.7, -279.7, 10.6, 1.0, true /* TRUE */);
                $.player1.setCoordinates(-1056.7, -279.7, 10.6);
                $.player1.setHeading(273.0);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_printers_pickup == 1) {
              $.printers_pickup.remove();
              $.remove_printers_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************PORN SAVE LOOP*********************************************

async function porn_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME PSAVE9
}



async function porn_save_loop_inner() {
  // SCM GOTO → porn_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("PORNI")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_porn_pickup == 0) {
              $.porn_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, 0.0, 957.9, 11.1);
              $.remove_porn_pickup = 1;
            }
            if ($.porn_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.porn_pickup.remove();
                $.porn_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, 0.0, 957.9, 11.1);
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(1.4, 960.7, 10.2, 1.0, true /* TRUE */);
                $.player1.setCoordinates(1.4, 960.7, 10.2);
                $.player1.setHeading(274.3);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_porn_pickup == 1) {
              $.porn_pickup.remove();
              $.remove_porn_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************MALIBU SAVE LOOP*********************************************

async function malibu_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME PSAVE10
}



async function malibu_save_loop_inner() {
  // SCM GOTO → malibu_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("BEACH3")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_malibu_pickup == 0) {
              $.malibu_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, 499.5, -66.9, 11.4);
              $.remove_malibu_pickup = 1;
            }
            if ($.malibu_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.malibu_pickup.remove();
                $.malibu_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, 499.5, -66.9, 11.4);
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(492.0, -80.6, 10.7, 0.5, true /* TRUE */);
                $.player1.setCoordinates(492.0, -80.6, 10.7);
                $.player1.setHeading(224.5);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_malibu_pickup == 1) {
              $.malibu_pickup.remove();
              $.remove_malibu_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************NBMNSAVE1 SAVE LOOP*********************************************

async function nbmnsave1_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME SAVE1
}



async function nbmnsave1_save_loop_inner() {
  // SCM GOTO → nbmnsave1_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("BEACH3")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_nbmnbuy_pickup == 0) {
              $.nbmnbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.nbmnbuyX, $.nbmnbuyY, $.nbmnbuyZ); //nbmnsave1 lobby
              $.remove_nbmnbuy_pickup = 1;
            }
            if ($.nbmnbuy_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.nbmnbuy_pickup.remove();
                $.nbmnbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.nbmnbuyX, $.nbmnbuyY, $.nbmnbuyZ); //nbmnsave1 lobby
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(428.4, 609.1, 12.0, 1.0, true /* TRUE */);
                $.player1.setCoordinates(428.4, 609.1, 12.0);
                $.player1.setHeading(0.0);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_nbmnbuy_pickup == 1) {
              $.nbmnbuy_pickup.remove();
              $.remove_nbmnbuy_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************Links View Apartment SAVE LOOP*********************************************

async function lnkvsave1_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME SAVE2
}



async function lnkvsave1_save_loop_inner() {
  // SCM GOTO → lnkvsave1_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("BEACH3")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_lnkvbuy_pickup == 0) {
              $.lnkvbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.lnkvbuyX, $.lnkvbuyY, $.lnkvbuyZ);
              $.remove_lnkvbuy_pickup = 1;
            }
            if ($.lnkvbuy_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.lnkvbuy_pickup.remove();
                $.lnkvbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.lnkvbuyX, $.lnkvbuyY, $.lnkvbuyZ); //carshow_save lobby
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(306.5728, 376.2928, 12.1856, 1.0, true /* TRUE */);
                $.player1.setCoordinates(306.5728, 376.2928, 12.1856);
                $.player1.setHeading(276.3156);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_lnkvbuy_pickup == 1) {
              $.lnkvbuy_pickup.remove();
              $.remove_lnkvbuy_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************Hyman Condo SAVE LOOP*********************************************

async function hycosave1_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME SAVE3
}



async function hycosave1_save_loop_inner() {
  // SCM GOTO → hycosave1_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("DTOWN")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_hycobuy_pickup == 0) {
              $.hycobuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.hycobuyX, $.hycobuyY, $.hycobuyZ);
              $.remove_hycobuy_pickup = 1;
            }
            if ($.hycobuy_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.hycobuy_pickup.remove();
                $.hycobuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.hycobuyX, $.hycobuyY, $.hycobuyZ); //carshow_save lobby
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(-833.8110, 1304.0696, 10.5131, 1.0, true /* TRUE */);
                $.player1.setCoordinates(-833.8110, 1304.0696, 10.5131);
                $.player1.setHeading(200.4458);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_hycobuy_pickup == 1) {
              $.hycobuy_pickup.remove();
              $.remove_hycobuy_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************1102 Washington Street SAVE LOOP*********************************************

async function washsave1_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME SAVE4
}



async function washsave1_save_loop_inner() {
  // SCM GOTO → washsave1_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("BEACH2")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_washbuy_pickup == 0) {
              $.washbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.washbuyX, $.washbuyY, $.washbuyZ);
              $.remove_washbuy_pickup = 1;
            }
            if ($.washbuy_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.washbuy_pickup.remove();
                $.washbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.washbuyX, $.washbuyY, $.washbuyZ); //carshow_save lobby
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(90.7810, -806.1213, 10.3349, 1.0, true /* TRUE */);
                $.player1.setCoordinates(90.7810, -806.1213, 10.3349);
                $.player1.setHeading(238.8605);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_washbuy_pickup == 1) {
              $.washbuy_pickup.remove();
              $.remove_washbuy_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************Ocean Heights Apartment SAVE LOOP*********************************************


async function ochesave1_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME SAVE5
}



async function ochesave1_save_loop_inner() {
  // SCM GOTO → ochesave1_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("BEACH1")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_ochebuy_pickup == 0) {
              $.ochebuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.ochebuyX, $.ochebuyY, $.ochebuyZ);
              $.remove_ochebuy_pickup = 1;
            }
            if ($.ochebuy_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.ochebuy_pickup.remove();
                $.ochebuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.ochebuyX, $.ochebuyY, $.ochebuyZ); //carshow_save lobby
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(14.4571, -1498.5939, 12.1974, 1.0, true /* TRUE */);
                $.player1.setCoordinates(14.4571, -1498.5939, 12.1974);
                $.player1.setHeading(353.8286);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_ochebuy_pickup == 1) {
              $.ochebuy_pickup.remove();
              $.remove_ochebuy_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************3321 Vice Point SAVE LOOP*********************************************


async function vcptsave1_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME SAVE6
}



async function vcptsave1_save_loop_inner() {
  // SCM GOTO → vcptsave1_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("BEACH3")) {
        if ($.player1.canStartMission()) {
          if (ONMISSION == 0) {
            if ($.remove_vcptbuy_pickup == 0) {
              $.vcptbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.vcptbuyX, $.vcptbuyY, $.vcptbuyZ);
              $.remove_vcptbuy_pickup = 1;
            }
            if ($.vcptbuy_pickup.hasBeenCollected()) {
              await save_the_game();  // SCM GOSUB save_the_game
              if ($.player1.isPlaying()) {
                $.vcptbuy_pickup.remove();
                $.vcptbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, $.vcptbuyX, $.vcptbuyY, $.vcptbuyZ); //carshow_save lobby
                Camera.DoFade(1000, 1 /* FADE_IN */);
                World.ClearArea(529.6626, 1272.1550, 16.8220, 1.0, true /* TRUE */);
                $.player1.setCoordinates(529.6626, 1272.1550, 16.8220);
                $.player1.setHeading(131.5277);
              }
              await save_the_game2();  // SCM GOSUB save_the_game2
            }
          }
          else {
            if ($.remove_vcptbuy_pickup == 1) {
              $.vcptbuy_pickup.remove();
              $.remove_vcptbuy_pickup = 0;
            }
          }
        }
      }
    }


  }
}



// **********************************Skumole Terrace SAVE LOOP*********************************************


async function skumsave1_save_loop() {

  //	Should be called before main loop


  // SCRIPT_NAME SAVE7
}



async function skumsave1_save_loop_inner() {
  // SCM GOTO → skumsave1_save_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(250);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("DTOWN")) {
        if ($.player1.isPlaying()) {
          if ($.player1.canStartMission()) {
            if (ONMISSION == 0) {
              if ($.remove_skumbuy_pickup == 0) {
                $.skumbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -562.8, 699.7, 20.6);
                $.remove_skumbuy_pickup = 1;
              }
              if ($.skumbuy_pickup.hasBeenCollected()) {
                await save_the_game();  // SCM GOSUB save_the_game
                if ($.player1.isPlaying()) {
                  $.skumbuy_pickup.remove();
                  $.skumbuy_pickup = Pickup.Create(pickupsave, 3 /* PICKUP_ONCE */, -562.8, 699.7, 20.6); //carshow_save lobby
                  Camera.DoFade(1000, 1 /* FADE_IN */);
                  World.ClearArea(-559.9, 705.4, 19.8, 1.0, true /* TRUE */);
                  $.player1.setCoordinates(-559.9, 705.4, 19.8);
                  $.player1.setHeading(243.0);
                }
                await save_the_game2();  // SCM GOSUB save_the_game2
              }
            }
            else {
              if ($.remove_skumbuy_pickup == 1) {
                $.skumbuy_pickup.remove();
                $.remove_skumbuy_pickup = 0;
              }
            }
          }
        }
      }
    }


  }
}



// ****************************************HELP TEXT*************************************************

async function game_help_loop() {





  // SCRIPT_NAME HELP
}



async function game_help_loop_inner() {
  // SCM GOTO → game_help_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.flag_intro_passed == 1) {
        if ($.print_first_help == 0) {
          await asyncWait(500);
          $.controlmode = Pad.GetControllerMode();
          if ($.controlmode == 2) {
            Text.PrintHelp("HELP26"); //ENTER A CAR	L1
          }
          else {
            Text.PrintHelp("HELP21"); //ENTER A CAR	triangle
          }
          await asyncWait(5000);
          Text.PrintHelp("HELP42"); //Walk into the building
          $.goto_hotel_contact_blip = Blip.AddForContactPoint(240.4, -1280.2, 10.0);
          Hud.FlashObject(8 /* HUD_FLASH_RADAR */);
          await asyncWait(3000);
          Hud.FlashObject(-1);
          TIMERB = 0;
          await asyncWait(3000);
          $.print_first_help = 1;
        }
        else {
          if ($.stop_in_marker == 0) {
            if ($.player1.locateAnyMeans3D(240.4, -1280.2, 10.0, 25.0, 25.0, 5.0, false /* FALSE */)) {
              Text.PrintHelp("HELP44");
              await asyncWait(3000);
              $.stop_in_marker = 1;
            }
          }
          if ($.player1.isPlaying()) {
            if ($.car_help_played == 0) {
              if ($.player1.isInAnyCar()) {
                await asyncWait(1000);
                $.controlmode = Pad.GetControllerMode();
                if ($.controlmode == 3) {
                  Text.PrintHelp("HELP4_D"); //Push the right analog stick up to accelerate.
                }
                else {
                  Text.PrintHelp("HELP4_A"); //Press the / button to accelerate
                }
                await asyncWait(4000);
                $.controlmode = Pad.GetControllerMode();
                if ($.controlmode == 1 || $.controlmode == 3) {
                  Text.PrintHelp("HELP36"); //Push left or right on the left analog stick to steer the vehicle.
                }
                else {
                  Text.PrintHelp("HELP35"); //Press the left or right directional buttons, or the left analog stick, to steer the vehicle.
                }
                await asyncWait(4000);
                $.controlmode = Pad.GetControllerMode();
                if ($.controlmode == 3) {
                  Text.PrintHelp("HELP5_D"); //Pull the right analog stick back to brake, or to reverse if the vehicle has stopped.
                }
                else {
                  Text.PrintHelp("HELP5_A"); //Press the * button to brake, or to reverse if the vehicle has stopped
                }
                await asyncWait(4000);
                $.controlmode = Pad.GetControllerMode();
                if ($.controlmode == 0 || $.controlmode == 1) {
                  Text.PrintHelp("HELP6_A"); //Press the R1 button to apply the vehicle's handbrake
                }
                if ($.controlmode == 2) {
                  Text.PrintHelp("HELP6_C"); //Press the " button to apply the vehicle's handbrake
                }
                if ($.controlmode == 3) {
                  Text.PrintHelp("HELP6_D"); //Press the L1 button to apply the vehicle's handbrake
                }
                await asyncWait(4000);
                $.car_help_played = 1;
              }
            }
            else {
              if ($.Storm_Warning == 1) {
                if ($.player1.isPlaying()) {
                  if ($.player1.isOnAnyBike()) {
                    if ($.bike_help == 0) {
                      await asyncWait(2000);
                      if ($.player1.isPlaying()) {
                        if ($.controlmode == 0) {
                          Text.PrintHelp("HELP27"); //Press the ~h~up or down directional buttons~w~, or the ~h~left analog stick~w~, to shift your weight on a bike.
                        }
                        else {
                          Text.PrintHelp("HELP28"); //Press ~h~up~w~ or ~h~down~w~ on the ~h~left analog stick~w~ to shift your weight on a bike.
                        }
                      }
                      $.bike_help = 1;
                    }
                  }
                  if ($.player1.isPlaying()) {
                    if ($.player1.isInAnyCar()) {
                      if ($.drive_by_help == 0) {
                        if ($.player1.isCurrentWeapon(WEAPONTYPE_TEC9) || $.player1.isCurrentWeapon(3 /* WEAPONTYPE_UZI */) || $.player1.isCurrentWeapon(WEAPONTYPE_SILENCED_INGRAM) || $.player1.isCurrentWeapon(WEAPONTYPE_MP5)) {
                          Text.PrintHelp("HELP31"); // To do a drive-by, first look left or right using the L2 button or the R2 button.
                          await asyncWait(5000);
                          $.controlmode = Pad.GetControllerMode();
                          if ($.controlmode == 3) {
                            Text.PrintHelp("HELP33"); //Then fire using the R1 button.
                          }
                          else {
                            Text.PrintHelp("HELP32"); //Then fire using the | button.
                          }
                          await asyncWait(5000);
                          Text.PrintHelp("HELP34"); // "You must have a sub machine gun	to perform a drive-by."
                          $.drive_by_help = 1;
                        }
                      }
                    }
                  }
                }
              }


            }



          }
        }
        if ($.player1.isPlaying()) {
          if ($.print_save_game_help == 0) {
            if ($.view_of_ocean_view == 0) {
              if ($.player1.locateStoppedInCar3D(240.4, -1280.2, 10.0, 4.0, 4.0, 3.0, false /* FALSE */) || $.player1.locateOnFoot3D(240.4, -1280.2, 10.0, 4.0, 4.0, 3.0, false /* FALSE */)) {
                $.player1.setControl(false /* OFF */);
                Camera.SetFixedPosition(264.334, -1311.160, 10.297, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(263.577, -1310.574, 10.589, 2 /* JUMP_CUT */);
                await asyncWait(1000);
                Text.PrintHelp("HELP16"); //Walk through the front door of the ~h~Ocean View~w~ Hotel to enter the building.
                await asyncWait(3000);
                if ($.player1.isPlaying()) {
                  $.player1.setControl(true /* ON */);
                }
                Camera.RestoreJumpcut();
                Camera.SetBehindPlayer();
                $.goto_hotel_contact_blip.remove();
                if ($.flag_hotel_mission1_passed == 0) {
                  $.goto_hotel_contact_blip = Blip.AddForContactPoint($.hotelX, $.hotelY, $.hotelZ);
                }
                $.view_of_ocean_view = 1;
              }
            }
          }
        }
        if ($.print_save_game_help == 0) {
          if (ONMISSION == 0) {
            if ($.flag_player_in_hotel == 1) {
              if ($.player1.isPlaying()) {
                if ($.player1.locateAnyMeans3D(225.0, -1277.3, 11.5, 2.5, 2.5, 3.0, false /* FALSE */)) {
                  $.goto_hotel_contact_blip.remove();
                  if ($.flag_hotel_mission1_passed == 0) {
                    $.goto_hotel_contact_blip = Blip.AddForContactPoint($.hotelX, $.hotelY, $.hotelZ);
                  }
                  $.player1.setControl(false /* OFF */);
                  Camera.SetFixedPosition(223.301, -1277.655, 13.822, 0.0, 0.0, 0.0);
                  Camera.PointAtPoint(222.578, -1277.013, 13.565, 2 /* JUMP_CUT */);
                  Text.PrintHelp("S_PROMP"); //Save game
                  TIMERA = 0;
                  while (!(TIMERA > 1000)) {
                    await asyncWait(0);
                    if ($.player1.isPlaying()) {
                      $.player1.setControl(false /* OFF */);
                    }


                  }
                  TIMERA = 0;
                  while (!(TIMERA > 2000)) {
                    await asyncWait(0);
                    if ($.player1.isPlaying()) {
                      $.player1.setControl(false /* OFF */);
                    }
                    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
                      // SCM GOTO → end_of_save_help (not lowered; manual jump required)
                      throw new Error("unresolved GOTO end_of_save_help"); // fallback: would break linear control flow
                    }


                  }
                  Camera.SetInterpolationParameters(0.0, 1500);
                  Camera.SetFixedPosition(223.301, -1277.655, 13.822, 0.0, 0.0, 0.0);
                  Camera.PointAtPoint(222.563, -1278.279, 13.565, 1 /* INTERPOLATION */);
                  TIMERA = 0;
                  while (!(TIMERA > 1500)) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
                      // SCM GOTO → end_of_save_help (not lowered; manual jump required)
                      throw new Error("unresolved GOTO end_of_save_help"); // fallback: would break linear control flow
                    }


                  }
                  Text.PrintHelp("HELP19"); //Continue the game
                  TIMERA = 0;
                  while (!(TIMERA > 4000)) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
                      // SCM GOTO → end_of_save_help (not lowered; manual jump required)
                      throw new Error("unresolved GOTO end_of_save_help"); // fallback: would break linear control flow
                    }


                  }
                  // SCM label end_of_save_help
                  if ($.player1.isPlaying()) {
                    $.player1.setControl(true /* ON */);
                  }
                  Camera.RestoreJumpcut();
                  Camera.SetBehindPlayer();
                  $.print_save_game_help = 1;
                }
              }
            }
          }
        }
        if ($.flag_hotel_mission1_passed == 1) {
          if ($.print_help_for_radar == 0) {
            $.hotel_contact_blip = Blip.AddSpriteForContactPoint(219.8, -1273.5, 11.0, RADAR_SPRITE_SAVEHOUSE); //SAVE POINT HOTEL
            $.hotel_contact_blip.changeDisplay(2 /* BLIP_ONLY */);


            if ($.player1.isPlaying()) {
              $.player1.setControl(false /* OFF */);
            }
            await get_fading_status();  // SCM GOSUB get_fading_status
            if ($.player1.isPlaying()) {
              $.player1.setControl(true /* ON */);
            }
            Text.PrintHelp("HELP14"); //Radar help
            Hud.FlashObject(8 /* HUD_FLASH_RADAR */);
            await asyncWait(2000);
            Hud.FlashObject(-1);
            $.print_help_for_radar = 1;
          }
        }
        if ($.print_help_for_radar == 1) {
          if ($.car_help_played == 1) {
            if ($.camera_help_played == 0) {
              await asyncWait(4000);
              $.controlmode = Pad.GetControllerMode();
              if ($.controlmode == 1) {
                Text.PrintHelp("HELP57"); // Press the ~h~up or down ~w~directional buttons to change the camera mode.
              }
              else {
                Text.PrintHelp("HELP56"); // Press the ~h~select~w~ button to change camera modes.
              }
              $.camera_help_played = 1;
            }
          }
        }
        if ($.drive_by_help == 1 && $.bike_help == 1 && $.print_help_for_radar == 1 && $.camera_help_played == 1 && $.police_bribe_help == 1 && $.wanted_help == 1) {
          if ($.wasted_help == 1) {
            $.wasted_help1.remove();
            $.wasted_help2.remove();
            $.busted_help1.remove();
            $.busted_help2.remove();
            return; // TERMINATE_THIS_SCRIPT
          }


        }
        if ($.flag_baron_mission2_passed == 1) {
          $.wasted_help1.remove();
          $.wasted_help2.remove();
          $.busted_help1.remove();
          $.busted_help2.remove();
          await asyncWait(3000);
          Text.PrintHelp("BRID_OP");
          return; // TERMINATE_THIS_SCRIPT
        }
        if ($.wasted_help == 0) {
          if ($.wasted_help1.hasBeenCollected() || $.wasted_help2.hasBeenCollected()) {
            if ($.player1.isPlaying()) {
              $.wasted_help1.remove();
              $.wasted_help2.remove();
              Text.PrintHelp("HEAL_B"); // You have been wasted
              await asyncWait(5000);
              Text.PrintHelp("HEAL_C");
              await asyncWait(5000);
              Text.PrintHelp("HEAL_E");
              $.wasted_help = 1;
            }


          }


        }
        if ($.wanted_help == 0) {
          if ($.busted_help1.hasBeenCollected() || $.busted_help2.hasBeenCollected()) {
            if ($.player1.isPlaying()) {
              $.busted_help1.remove();
              $.busted_help2.remove();
              Text.PrintHelp("WANT_G");
              await asyncWait(5000);
              Text.PrintHelp("WANT_H");
              await asyncWait(5000);
              Text.PrintHelp("WANT_I");
              await asyncWait(5000);
              Text.PrintHelp("WANT_A"); // You have a wanted level
              await asyncWait(5000);
              Text.PrintHelp("WANT_B");
              await asyncWait(5000);
              Text.PrintHelp("WANT_F");
              $.wanted_help = 1;
            }


          }


        }
        if ($.police_bribe_help == 0) {
          if ($.beach_bribe1.hasBeenCollected() || $.beach_bribe2.hasBeenCollected() || $.beach_bribe3.hasBeenCollected() || $.beach_bribe4.hasBeenCollected() || $.beach_bribe5.hasBeenCollected() || $.beach_bribe6.hasBeenCollected()) {
            if ($.player1.isPlaying()) {
              Text.PrintHelp("BRIBE1");
              $.police_bribe_help = 1;
            }


          }
          if ($.porn_bribe1.hasBeenCollected()) {
            if ($.player1.isPlaying()) {
              Text.PrintHelp("BRIBE1");
              $.police_bribe_help = 1;
            }


          }
          if ($.main_bribe1.hasBeenCollected() || $.main_bribe2.hasBeenCollected() || $.main_bribe3.hasBeenCollected() || $.main_bribe4.hasBeenCollected() || $.main_bribe5.hasBeenCollected() || $.main_bribe6.hasBeenCollected()) {
            if ($.player1.isPlaying()) {
              Text.PrintHelp("BRIBE1");
              $.police_bribe_help = 1;
            }


          }


        }
        if ($.wanted_star_help == 0) {
          if (Hud.AreWantedStarsFlashing()) {
            await asyncWait(5000);
            if ($.player1.isPlaying()) {
              Text.PrintHelp("WANT_L");
              $.wanted_star_help = 1;
            }


          }


        }
        if ($.car_help_played == 1) {
          if ($.Storm_Warning == 0) {
            if ($.player1.isPlaying()) {
              if ($.player1.isInAnyCar()) {
                Audio.PlayAnnouncement(0);
                Text.PrintHelp("BRID_CL"); //"Storm Warning all bridges to the mainland is closed"
                $.Storm_Warning = 1;
              }
            }
          }
        }


      }
    }




  }
}






async function make_player_safe() {


  if ($.player1.isPlaying()) {
    ONMISSION = 1;
    $.player1.makeSafeForCutscene();
    Camera.SetFadingColor(0, 0, 0);
    Camera.DoFade(1500, 0 /* FADE_OUT */);
    Streaming.Switch(false /* OFF */);
  }
}




async function get_fading_status() {


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  if ($.player1.isPlaying()) {
    $.scplayer.setObjNoObj();
  }
}




async function lawyer_script_cut() {


  if ($.player1.isPlaying()) {
    ONMISSION = 1;
    Hud.SwitchWidescreen(true /* ON */);
    Camera.SetFixedPosition(91.925, -818.489, 20.000, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(92.866, -818.736, 19.769, 2 /* JUMP_CUT */);
    World.ClearArea(119.2, -826.9, 10.0, 1.0, true /* TRUE */);
    $.player1.setCoordinates(119.4, -827.2, 9.7);
    $.player1.setHeading(230.0);
    $.scplayer.setObjGotoCoordOnFoot(123.3, -829.9);
  }


  await asyncWait(1000);
}



async function baron_script_cut() {


  ONMISSION = 1;
  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(-381.923, -473.339, 48.904, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-381.898, -474.247, 48.486, 2 /* JUMP_CUT */); //View of Mansion front


  await asyncWait(1000);
}



async function general_script_cut() {


  ONMISSION = 1;
  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(-229.438, -1364.204, 12.607, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-230.424, -1364.068, 12.511, 2 /* JUMP_CUT */); //View of boat
  $.scplayer.setObjGotoCoordOnFoot(-251.9, -1360.8);


  await asyncWait(1000);
}



async function porn_script_cut() {


  ONMISSION = 1;
  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(-52.624, 939.244, 10.011, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-53.538, 938.966, 10.306, 2 /* JUMP_CUT */); //View of porn studio
  $.scplayer.setObjGotoCoordOnFoot(-76.3, 931.3);


  await asyncWait(1000);
}



async function kent_script_cut() {


  ONMISSION = 1;
  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(499.781, -106.921, 12.057, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(499.357, -106.019, 12.139, 2 /* JUMP_CUT */); //View of Malibu
  //SET_CHAR_OBJ_GOTO_COORD_ON_FOOT scplayer 487.8 -74.3

  $.scplayer.setCoordinates(482.2, -69.9, 9.9);
  await asyncWait(1000);
}



async function bankjob_script_cut() {


  ONMISSION = 1;
  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(487.475, -68.248, 11.147, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(486.500, -68.023, 11.150, 2 /* JUMP_CUT */); //View of Inside Malibu
  $.scplayer.setHeading(62.0);


  await asyncWait(1000);
}



async function phil_script_cut() {


  ONMISSION = 1;
  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(-1094.531, 332.318, 14.799, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1095.238, 332.993, 14.591, 2 /* JUMP_CUT */); //View of Phil's caravan
  $.scplayer.setObjGotoCoordOnFoot(-1102.7, 343.4);


  await asyncWait(1000);
}




async function counter_script_cut() {


  ONMISSION = 1;
  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(-1039.093, -293.828, 27.810, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1039.811, -293.283, 27.377, 2 /* JUMP_CUT */); //View of Print works
  $.scplayer.setObjGotoCoordOnFoot(-1070.6, -278.9);


  await asyncWait(1000);
}



async function biker_script_cut() {


  ONMISSION = 1;
  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(-609.208, 660.793, 14.520, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-608.458, 660.156, 14.339, 2 /* JUMP_CUT */); //View of Biker Bar
  $.scplayer.setObjGotoCoordOnFoot(-597.4, 651.6);


  await asyncWait(1000);
}



async function rock_script_cut() {


  ONMISSION = 1;
  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(-870.590, 1155.257, 10.356, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-871.349, 1155.864, 10.592, 2 /* JUMP_CUT */); //View of Recording studio
  $.scplayer.setObjGotoCoordOnFoot(-883.1, 1159.2);


  await asyncWait(1000);
}



async function cuban_script_cut() {


  ONMISSION = 1;
  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(-1179.528, -605.912, 12.220, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1178.774, -606.569, 12.223, 2 /* JUMP_CUT */); //View of Cuban Cafe
  //SET_CHAR_OBJ_GOTO_COORD_ON_FOOT scplayer -1169.9 -608.9

  $.scplayer.setCoordinates(-1166.3, -634.4, 10.6);


  await asyncWait(1000);
}



async function haitian_script_cut() {


  ONMISSION = 1;
  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(-969.554, 139.730, 10.058, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-968.921, 140.503, 10.031, 2 /* JUMP_CUT */); //View of Haitian shack
  $.scplayer.setObjGotoCoordOnFoot(-962.6, 146.1);


  await asyncWait(1000);
}



async function taxiwar_script_cut() {


  ONMISSION = 1;
  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(-994.919, 210.472, 15.758, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-995.722, 210.020, 15.370, 2 /* JUMP_CUT */);
}




async function save_the_game() {


  ONMISSION = 1;
  $.player1.setControl(false /* Off */);


  Game.ActivateSaveMenu(); //THE GAME SAVES/RE-LOADS HERE!!!!!


  await asyncWait(0);


  while (!(Game.HasSaveGameFinished())) {
    await asyncWait(0);


  }


  Camera.SetFadingColor(0, 0, 0);


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  if ($.player1.isPlaying()) {
    $.player1.setHealth(200);
    $.player1.setControl(false /* OFF */);
  }
}



async function save_the_game2() {


  if ($.player1.isPlaying()) {
    Camera.RestoreJumpcut();
    Camera.SetBehindPlayer();
  }


  await asyncWait(500);


  if ($.player1.isPlaying()) {
    $.player1.setControl(true /* on */);
    ONMISSION = 0;
  }
}

export async function main_d() {
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // **********************************Vice City Main Script**********************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME Main

  // ***************************************SETUP*********************************************
  // ******************************************************************************************


  Camera.DoFade(0, 0 /* FADE_OUT */);
  Stat.SetTotalNumberOfMissions(0);
  Stat.SetProgressTotal(0);
  Game.SetMaxWantedLevel(4);
  Game.SetCollectableTotal(0);
  // SET_DEATHARREST_STATE(false /* OFF */);
  Clock.SetTimeOfDay(22, 0); //This should be: 22 00

  // *****************************************CREATE PLAYER************************************


  // VAR_INT player1 scplayer


  Streaming.RequestCollision(83.0, -849.8);


  Streaming.LoadScene(83.0, -849.8, 9.3); //Miami Ocean Drive


  $.player1 = Player.Create(0, 83.0, -849.8, 9.3); //Miami Ocean Drive


  $.scplayer = $.player1.getChar();


  // LoadLaunchMission inital.sc
  //LOAD_AND_LAUNCH_MISSION_EXCLUSIVE inital.sc


  // VAR_INT stadium_door_1
  $.stadium_door_1 = ScriptObject.CreateNoOffset(dtn_staddoora, -1109.615, 1330.097, 20.372);
  $.stadium_door_1.dontRemove();


  // VAR_INT stadium_door_2
  $.stadium_door_2 = ScriptObject.CreateNoOffset(dtn_staddoorb, -1109.615, 1331.932, 20.372);
  $.stadium_door_2.dontRemove();


  // VAR_INT stadium_poster
  $.stadium_poster = ScriptObject.CreateNoOffset(dthotring_a, -1037.08, 1340.258, 36.552);
  $.stadium_poster.dontRemove();


  // VAR_INT day_flag day_counter hours_s minutes_s flag_stadium_doors

  // *************************************VARIABLES********************************************


  // VAR_INT gate_slide_loop skip_flag mansion_blip remove_hycobuy_pickup remove_ochebuy_pickup view_of_ocean_view
  // VAR_INT controlmode lawyer_blip1 mansion_save_pickup remove_mansion_pickup remove_lnkvbuy_pickup
  // VAR_INT mission_trigger_wait_time switch_off_starfish_gates car_help_played buddycar remove_taxiwar_save_pickup
  // VAR_INT breakout_timer breakout_timer_start breakout_diff played_reminder_help remove_washbuy_pickup
  // VAR_INT audio_is_loading audio_has_loaded print_help_for_jacking remove_nbmnbuy_pickup remove_strpbuy_pickup
  // VAR_INT first_two_samples second_two_samples third_two_samples forth_two_samples fifth_two_samples sixth_two_samples
  // VAR_INT print_save_game_help print_first_help print_help_for_radar drive_by_help bike_help remove_boatbuy_pickup remove_icecream_pickup
  // VAR_INT import_car_generator1_created import_car_generator2_created import_car_generator3_created import_car_generator4_created
  // VAR_INT flag_kickstart_passed_1stime buddy_blip_active buddy_blip skip_timer1_acive colar_cuffs_blip remove_skumbuy_pickup
  // VAR_INT button_pressed serg_mission3_start baron_blip1 fastest_boat fastest_boat_blip goto_hotel_contact_blip
  // VAR_INT remove_carshow_pickup carshow_save_pickup remove_vcptbuy_pickup taxiwar_save_pickup
  // VAR_INT remove_printers_pickup remove_porn_pickup remove_malibu_pickup printers_pickup porn_pickup malibu_pickup
  // VAR_INT star_gun3 star_gun4 star_health3 star_arm1 cokerun_trigger stop_in_marker
  // VAR_INT buddys_lambo police_chopper Storm_Warning camera_help_played
  // VAR_INT deluxo_prize_car_gen sabretur_prize_car_gen sandking_prize_car_gen Hotring_prize_car_gen created_final_shirt


  // VAR_FLOAT one_sixteenth one_thirtysecond one_sixtyfourth
  // VAR_FLOAT player_x player_y player_z ground_z
  // VAR_FLOAT clothes_shopX clothes_shopY clothes_shopZ game_percentage


  // VAR_INT wasted_help wanted_help police_bribe_help wanted_star_help


  // VAR_INT flag_played_rock3_before


  // VAR_INT player_had_reload_award


  // VAR_INT flag_played_bank2_before


  $.remove_carshow_pickup = 0;

  //POLICE BRIBES********************************************************************************


  // VAR_INT beach_bribe1 beach_bribe2 beach_bribe3 beach_bribe4 beach_bribe5 beach_bribe6 porn_bribe1
  // VAR_INT main_bribe1 main_bribe2 main_bribe3 main_bribe4 main_bribe5 main_bribe6

  //BEACH

  $.beach_bribe1 = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, 393.9, -60.2, 11.5); //Not far from Construction Site behind some houses
  $.beach_bribe2 = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, 116.0, -1313.1, 4.4); //Through Underground Shopping mall (washinton)
  $.beach_bribe3 = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, 393.7, -660.6, 10.7); //Middle of alleyways at back of Ocean Drive
  $.beach_bribe4 = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, 470.7, 70.1, 10.8); //Just down from Pizza Hut in Vice Point
  $.beach_bribe5 = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, 382.7, 364.1, 10.8); //In Alleyway in centre of Vice Point
  $.beach_bribe6 = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, 422.4, 971.2, 12.1); //Near garages at Big Mall

  //PORN ISLAND

  $.porn_bribe1 = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, 89.1, 887.4, 10.5); //Down Unused street on Prawn Island

  //GOLF ISLAND

  //STAR ISLAND

  //MAINLAND

  $.main_bribe1 = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, -822.7, 1304.5, 11.7); //Between shortcut in downtown
  $.main_bribe2 = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, -900.69, 251.4, 17.1); //over jump at top of Little Hiati into Move Over Miami Sign
  $.main_bribe3 = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, -973.7, 61.0, 10.4); //in little haiti close by auntie poulets hut
  $.main_bribe4 = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, -937.9, -114.1, 17.0); //Over little aquaduct in little hiati
  $.main_bribe5 = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, -1015.9, -627.9, 11.2); //Through alleyway in little havana
  $.main_bribe6 = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, -906.3, -834.0, 15.7); //Over jump from main drag into car yard

  // ***************************************CAR GENERATORS***************************************


  $.deluxo_prize_car_gen = CarGenerator.Create(-1022.6, -868.6, 12.2, 175.0, deluxo, -1, -1, true /* TRUE */, 0, 0, 0, 10000);
  $.deluxo_prize_car_gen.switch(0);


  $.sabretur_prize_car_gen = CarGenerator.Create(-1014.1, -869.4, 12.2, 188.0, sabretur, -1, -1, true /* TRUE */, 0, 0, 0, 10000);
  $.sabretur_prize_car_gen.switch(0);


  $.sandking_prize_car_gen = CarGenerator.Create(-1014.3, -868.8, 17.9, 195.0, sandking, -1, -1, true /* TRUE */, 0, 0, 0, 10000);
  $.sandking_prize_car_gen.switch(0);


  $.Hotring_prize_car_gen = CarGenerator.Create(-1023.2, -868.1, 17.9, 172.0, Hotring, -1, -1, true /* TRUE */, 0, 0, 0, 10000);
  $.Hotring_prize_car_gen.switch(0);


  $.gen_car148 = CarGenerator.Create(-379.0, -632.1, 10.2, 187.2, seaspar, -1, -1, false, 0, 0, 0, 10000); //behind mansion
  $.gen_car148.switch(0);


  $.gen_car149 = CarGenerator.Create(-1720.3, -239.6, 14.8, 92.0, rhino, -1, -1, false, 0, 0, 0, 10000); //at army barracks
  $.gen_car149.switch(0);


  $.gen_car150 = CarGenerator.Create(-1681.2, -103.7, 14.7, 180.0, hunter, -1, -1, false, 0, 0, 0, 10000); //at army barracks
  $.gen_car150.switch(0);


  $.south_beach_hunter = CarGenerator.Create(-72.4, -1607.9, 12.7, 0.0, hunter, -1, -1, false, 0, 0, 0, 10000); //at south beach
  $.south_beach_hunter.switch(0);

  // *************************************LOCATE BLOB VARIABLE STUFF****************************


  // VAR_INT blob_flag

  // zero = false no blob displayed
  // one = true blob is displayed
  // before the loop set this flag tSo the way you want it displayed or nothing will happen

  // *****************************************SPECIAL CHARACTERS********************************

  // Cutscene stuff

  // VAR_INT cs_time
  // VAR_INT cs_player
  // VAR_INT cs_mobtable
  // VAR_INT cs_sfrenda
  // VAR_INT cs_sfrendb
  // VAR_INT cs_sgoona
  // VAR_INT cs_sgoonb
  // VAR_INT cs_case1
  // VAR_INT cs_case2
  // VAR_INT cs_gun1
  // VAR_INT cs_gun2
  // VAR_INT buddy
  // VAR_INT cs_buddy
  // VAR_INT cs_phil
  // VAR_INT cs_sonny
  // VAR_INT cs_phnplay
  // VAR_INT cs_phoncol
  // VAR_INT cs_ken
  // VAR_INT cs_kent
  // VAR_INT cs_dealer
  // VAR_INT cs_mgoona
  // VAR_INT cs_assas1
  // VAR_INT cs_assas2
  // VAR_INT cs_assas3
  // VAR_INT cs_chopper
  // VAR_INT cs_avery
  // VAR_INT cs_colonel
  // VAR_INT cs_svntray
  // VAR_INT cs_drinka
  // VAR_INT cs_drinkb
  // VAR_INT cs_drinkc
  // VAR_INT cs_bigm
  // VAR_INT cs_mserver
  // VAR_INT cs_server
  // VAR_INT cs_bmchcue
  // VAR_INT cs_cougcue
  // VAR_INT cs_poolballs
  // VAR_INT cs_diaz
  // VAR_INT cs_merc
  // VAR_INT cs_direc
  // VAR_INT cs_mporna
  // VAR_INT cs_candy
  // VAR_INT cs_gonz
  // VAR_INT cs_kelly
  // VAR_INT cs_cougr
  // VAR_INT cs_zepp
  // VAR_INT cs_apoulet
  // VAR_INT cs_dick
  // VAR_INT cs_jezz
  // VAR_INT cs_percy
  // VAR_INT cs_floozya
  // VAR_INT cs_floozyb
  // VAR_INT cs_floozyc
  // VAR_INT cs_bj
  // VAR_INT cs_pablo
  // VAR_INT cs_papa
  // VAR_INT cs_pepe
  // VAR_INT cs_umbto
  // VAR_INT cs_shootra
  // VAR_INT cs_shootrb
  // VAR_INT cs_philgun1
  // VAR_INT cs_philgun2
  // VAR_INT cs_hilary
  // VAR_INT cs_hilcar
  // VAR_INT cs_cam
  // VAR_INT cs_clubfan
  // VAR_INT cs_clubchair
  // VAR_INT cs_lwchara
  // VAR_INT cs_lwcharb
  // VAR_INT cs_dgoona
  // VAR_INT cs_dgoonc
  // VAR_INT cs_crewa
  // VAR_INT cs_crewb
  // VAR_INT cs_cmraman
  // VAR_INT cs_lobtray
  // VAR_INT cs_lobster
  // VAR_INT cs_coknife
  // VAR_INT cs_coltray
  // VAR_INT cs_lcfan
  // VAR_INT cs_dcfan
  // VAR_INT cs_espreso
  // VAR_INT cs_invite
  // VAR_INT cs_deagl
  // VAR_INT cs_introcar
  // VAR_INT cs_plane
  // VAR_INT cs_camera
  // VAR_INT cs_lawdoor
  // VAR_INT cs_phone
  // VAR_INT cs_rifle
  // VAR_INT cs_kettle
  // VAR_INT cs_htable
  // VAR_INT cs_drchair
  // VAR_INT cs_schair
  // VAR_INT cc_fan
  // VAR_INT cc_fan1
  // VAR_INT cs_dlove

  // **************************************Game variables**************************************


  // VAR_INT flag_intro_passed

  //Lawyer missions

  // VAR_INT hotel_contact_blip
  // VAR_INT flag_hotel_mission1_passed
  // VAR_INT lawyer_contact_blip
  // VAR_INT flag_lawyer_mission1_passed
  // VAR_INT flag_lawyer_mission2_passed
  // VAR_INT flag_lawyer_mission3_passed
  // VAR_INT flag_lawyer_mission4_passed

  //Generals missions

  // VAR_INT general_contact_blip
  // VAR_INT flag_general_mission1_passed
  // VAR_INT flag_general_mission2_passed
  // VAR_INT flag_general_mission3_passed
  // VAR_INT flag_general_mission4_passed
  // VAR_INT flag_general_mission5_passed

  //Barons missions

  // VAR_INT baron_contact_blip
  // VAR_INT flag_baron_mission1_passed
  // VAR_INT flag_baron_mission2_passed
  // VAR_INT flag_baron_mission3_passed
  // VAR_INT flag_baron_mission4_passed
  // VAR_INT flag_baron_mission5_passed
  // VAR_INT start_baron1_script_flag

  //Kent missions

  // VAR_INT kent_contact_blip
  // VAR_INT flag_kent_mission1_passed

  //Sergio missions

  // VAR_INT sergio_contact_blip
  // VAR_INT flag_sergio_mission1_passed
  // VAR_INT flag_sergio_mission2_passed
  // VAR_INT flag_sergio_mission3_passed

  //bankjob missions

  // VAR_INT bankjob_contact_blip
  // VAR_INT flag_bankjob_mission1_passed
  // VAR_INT flag_bankjob_mission2_passed
  // VAR_INT flag_bankjob_mission3_passed
  // VAR_INT flag_bankjob_mission4_passed
  // VAR_INT flag_player_on_bank_mission

  //phil missions

  // VAR_INT phil_contact_blip
  // VAR_INT flag_phil_mission1_passed
  // VAR_INT flag_phil_mission2_passed

  //porn missions

  // VAR_INT porn_contact_blip
  // VAR_INT flag_porn_mission1_passed
  // VAR_INT flag_porn_mission2_passed
  // VAR_INT flag_porn_mission3_passed
  // VAR_INT flag_porn_mission4_passed

  //exterior gates - this needs to go here for the gates opening to work

  // VAR_INT porn_north_gate_open
  // VAR_INT porn_south_gate_open
  // VAR_INT porn_north_gate_closed
  // VAR_INT porn_south_gate_closed

  //north gate

  $.porn_north_gate_closed = ScriptObject.CreateNoOffset(ci_gatesclosed, 11.697, 963.176, 12.258);
  $.porn_north_gate_closed.dontRemove();

  //south gate

  $.porn_south_gate_closed = ScriptObject.CreateNoOffset(ci_backgateclose, -11.853, 884.06, 13.542);
  $.porn_south_gate_closed.dontRemove();

  //protect missions

  // VAR_INT protect_contact_blip
  // VAR_INT flag_protect_mission1_passed
  // VAR_INT flag_protect_mission2_passed
  // VAR_INT flag_protect_mission3_passed
  // VAR_INT flag_finale_mission1_passed
  // VAR_INT flag_finale_mission2_passed

  //counter missions

  // VAR_INT counter_contact_blip
  // VAR_INT flag_counter_mission1_passed
  // VAR_INT flag_counter_mission2_passed

  //Bikers missions

  // VAR_INT bikers_contact_blip
  // VAR_INT flag_bikers_mission1_passed
  // VAR_INT flag_bikers_mission2_passed
  // VAR_INT flag_bikers_mission3_passed

  //Cuban missions

  // VAR_INT cuban_contact_blip
  // VAR_INT flag_cuban_mission1_passed
  // VAR_INT flag_cuban_mission2_passed
  // VAR_INT flag_cuban_mission3_passed
  // VAR_INT flag_cuban_mission4_passed

  //Haitian missions

  // VAR_INT haitian_contact_blip
  // VAR_INT flag_haitian_mission1_passed
  // VAR_INT flag_haitian_mission2_passed
  // VAR_INT flag_haitian_mission3_passed

  //rock missions

  // VAR_INT rock_contact_blip
  // VAR_INT flag_rock_mission1_passed
  // VAR_INT flag_rock_mission2_passed
  // VAR_INT flag_rock_mission3_passed
  // VAR_INT flag_rock_mission4_passed
  //VAR_INT flag_rock_mission5_passed

  //Assasin missions

  // VAR_INT assin_phone1
  // VAR_INT assin_phone2
  // VAR_INT assin_phone3
  // VAR_INT assin_phone4
  // VAR_INT assin_phone5
  // VAR_INT assasin_contact_blip
  // VAR_INT flag_assin_mission1_passed
  // VAR_INT flag_assin_mission2_passed
  // VAR_INT flag_assin_mission3_passed
  // VAR_INT flag_assin_mission4_passed
  // VAR_INT flag_assin_mission5_passed
  // VAR_INT counter_number_of_car_assin_done
  // VAR_INT counter_number_of_sniper_assin_done
  // VAR_INT counter_number_of_bat_assin_done

  //assassin payphone locations

  $.assin_phone1 = Phone.Grab(36.90384674, -1023.300232);
  $.assin_phone2 = Phone.Grab(482.453, 244.221);
  $.assin_phone3 = Phone.Grab(38.3409996, -1023.300232);
  $.assin_phone4 = Phone.Grab(-1482.801147, -825.258728);
  $.assin_phone5 = Phone.Grab(-976.7705, -530.5467);

  //Taxi War missions

  // VAR_INT taxiwar_contact_blip
  // VAR_INT flag_taxicut_mission1_passed
  // VAR_INT flag_taxiwar_mission1_passed
  // VAR_INT flag_taxiwar_mission2_passed
  // VAR_INT flag_taxiwar_mission3_passed
  // VAR_INT players_cab created_players_cab

  // Global variables for missions

  // VAR_INT flag_player_on_mission
  // VAR_INT flag_player_on_oddjob
  // VAR_INT ambulance_pager_flag total_saved_peds total_fires_exting


  // DECLARE_MISSION_FLAG(ONMISSION);

  // Odd job variables

  // VAR_INT been_in_ambulance_before flag_player_on_ambulance_mission
  // VAR_INT been_in_a_firetruk_before flag_player_on_fire_mission
  // VAR_INT been_in_a_copcar_before
  // VAR_INT been_in_a_gang_car1_before flag_player_on_gang_car1_mission
  // VAR_INT been_in_a_gang_car2_before flag_player_on_gang_car2_mission
  // VAR_INT been_in_a_gang_car3_before flag_player_on_gang_car3_mission
  // VAR_INT been_in_a_gang_car4_before flag_player_on_gang_car4_mission
  // VAR_INT passed_usj_counter
  // VAR_INT got_siren_help_before
  // VAR_INT been_in_a_garbage_truck_before flag_player_on_garbage_mission
  // VAR_INT flag_just_done_carbomb_mission
  // VAR_INT flag_just_done_speed_mission
  // VAR_INT flag_icecream_mission1_passed
  // VAR_INT flag_icecut_mission1_passed

  // 4x4/carpark Missions

  // VAR_INT flag_4x4_mission1_passed flag_4x4_mission2_passed flag_4x4_mission3_passed
  // VAR_INT flag_4x4one_trigger flag_4x4two_trigger flag_4x4three_trigger
  // VAR_INT record_4x4_one record_temp
  // VAR_INT flag_intro1_before flag_intro2_before flag_intro3_before flag_intro_carpark1_before
  // VAR_INT flag_carpark1_passed record_carpark1 flag_carpark1_trigger
  // VAR_INT flag_launch_4x4_1_ok flag_usj_off
  // VAR_INT bmx_1_trigger
  // VAR_INT flag_intro timer_intro_start intro_time_lapsed timer_intro_now

  // Kickstart

  // VAR_INT flag_kickstart_mission1_passed
  // VAR_INT kick_trigger

  // *******************************************BMX variables*****************************************************


  // VAR_INT flag_bmx_1_passed flag_bmx_2_passed flag_bmx_3_passed
  // VAR_FLOAT bmx_1_x bmx_1_y bmx_1_z

  // Taxi mission

  // VAR_INT taxi_passed been_in_a_taxi_before flag_taxi1_mission_launched been_in_taxi1_before new_taxi_created_before
  // VAR_INT spray_taxi done_taxi_help

  // RC Demolition

  // VAR_INT rec_rc1 rec_rc2 rec_rc3 rec_rc4 rec_rc5 rec_rc6
  // VAR_INT flag_just_done_rc_mission flag_rc1_passed flag_rc2_passed flag_rc3_passed flag_rc4_passed

  //HOOKER MISSION

  // VAR_INT flag_mission_hooker1_passed
  // VAR_INT flag_hooker_mission1_launched

  //PIZZA MISSION

  // VAR_INT flag_pizza_mission_passed
  // VAR_INT flag_pizza_trigger

  //MM MISSION

  // VAR_INT flag_mm_mission_passed
  // VAR_INT flag_mm_trigger

  //MOBILE PHONE

  // VAR_INT flag_first_asset_complete
  // VAR_INT timer_mobile_start timer_mobile_now timer_mobile_diff

  //RC HELI MISSION

  // VAR_INT has_player_just_done_rcheli_mission
  // VAR_INT flag_complete_rcheli_once

  //RC BUGGY CHECKPOINT RACE

  // VAR_INT has_player_just_done_rcrace_mission

  //RC PLANE RACE

  // VAR_INT has_player_just_done_rcplane_mission

  // *******************************************RACES variables*****************************************************


  // VAR_INT race1_best_position
  // VAR_INT race1_best_time
  // VAR_INT race2_best_position
  // VAR_INT race2_best_time
  // VAR_INT race3_best_position
  // VAR_INT race3_best_time
  // VAR_INT race4_best_position
  // VAR_INT race4_best_time
  // VAR_INT race5_best_position
  // VAR_INT race5_best_time
  // VAR_INT race6_best_position
  // VAR_INT race6_best_time
  // VAR_INT heli1_checkpoint_best_time
  // VAR_INT heli2_checkpoint_best_time
  // VAR_INT heli3_checkpoint_best_time
  // VAR_INT heli4_checkpoint_best_time

  // ***************************************BLIPS******************************************************



  // VAR_INT the_lawyer_blip the_kent_blip the_general_blip the_baron_blip the_sergio_blip
  // VAR_INT the_bankjob_blip the_phil_blip the_porn_blip the_protection_blip the_counter_blip
  // VAR_INT the_biker_blip the_rock_blip the_cuban_blip the_haitian_blip the_assasin_blip the_taxiwar_blip
  // VAR_INT weapon_shop1_blip weapon_shop2_blip weapon_shop3_blip hardware_shop1 hardware_shop2 hardware_shop3
  // VAR_INT spray_shop1 spray_shop2 spray_shop3 spray_shop5 hotel_save_pickup remove_hotel_pickup


  // VAR_FLOAT x y z the_yacht_x the_yacht_y the_yacht_z
  // VAR_INT car
  // VAR_INT got_money_help_print


  // VAR_FLOAT hotelX hotelY hotelZ
  // VAR_FLOAT lawyerX lawyerY lawyerZ
  // VAR_FLOAT generalX generalY generalZ
  // VAR_FLOAT baronX baronY baronZ
  // VAR_FLOAT sergioX sergioY sergioZ
  // VAR_FLOAT bankjobX bankjobY bankjobZ
  // VAR_FLOAT pornX pornY pornZ
  // VAR_FLOAT counterX counterY counterZ
  // VAR_FLOAT bikersX bikersY bikersZ
  // VAR_FLOAT cubanX cubanY cubanZ
  // VAR_FLOAT haitianX haitianY haitianZ
  // VAR_FLOAT rockX rockY rockZ
  // VAR_FLOAT taxiwarX taxiwarY taxiwarZ
  // VAR_FLOAT philX philY philZ
  // VAR_FLOAT icecreamX icecreamY icecreamZ
  // VAR_FLOAT heli1X heli1Y heli1Z
  // VAR_FLOAT heli2X heli2Y heli2Z
  // VAR_FLOAT heli3X heli3Y heli3Z
  // VAR_FLOAT heli4X heli4Y heli4Z
  // VAR_FLOAT baron2X baron2Y baron2Z
  // VAR_FLOAT kentX kentY kentZ


  // VAR_FLOAT ass_1_x ass_1_Y ass_1_Z
  // VAR_FLOAT ass_2_x ass_2_Y ass_2_Z
  // VAR_FLOAT ass_3_x ass_3_Y ass_3_Z
  // VAR_FLOAT ass_4_x ass_4_Y ass_4_Z
  // VAR_FLOAT ass_5_x ass_5_Y ass_5_Z


  // VAR_FLOAT ammu1X ammu1Y ammu1Z
  // VAR_FLOAT ammu2X ammu2Y ammu2Z
  // VAR_FLOAT ammu3X ammu3Y ammu3Z
  // VAR_FLOAT hard1X hard1Y hard1Z
  // VAR_FLOAT hard2X hard2Y hard2Z
  // VAR_FLOAT hard3X hard3Y hard3Z


  // VAR_FLOAT printbuyX printbuyY printbuyZ
  // VAR_FLOAT carbuyX carbuyY carbuyZ
  // VAR_FLOAT pornbuyX pornbuyY pornbuyZ
  // VAR_FLOAT icebuyX icebuyY icebuyZ
  // VAR_FLOAT taxibuyX taxibuyY taxibuyZ
  // VAR_FLOAT bankbuyX bankbuyY bankbuyZ
  // VAR_FLOAT boatbuyX boatbuyY boatbuyZ
  // VAR_FLOAT strpbuyX strpbuyY strpbuyZ
  // VAR_FLOAT nbmnbuyX nbmnbuyY nbmnbuyZ


  // VAR_FLOAT porncashX porncashY porncashZ
  // VAR_FLOAT boatcashX boatcashY boatcashZ
  // VAR_FLOAT taxicashX taxicashY taxicashZ
  // VAR_FLOAT lnkvbuyX lnkvbuyY lnkvbuyZ
  // VAR_FLOAT hycobuyX hycobuyY hycobuyZ
  // VAR_FLOAT ochebuyX ochebuyY ochebuyZ
  // VAR_FLOAT washbuyX washbuyY washbuyZ
  // VAR_FLOAT vcptbuyX vcptbuyY vcptbuyZ
  // VAR_FLOAT skumbuyX skumbuyY skumbuyZ


  $.lnkvbuyX = 304.5;
  $.lnkvbuyY = 376.3;
  $.lnkvbuyZ = 12.7;


  $.hycobuyX = -834.8;
  $.hycobuyY = 1306.9;
  $.hycobuyZ = 11.0;


  $.ochebuyX = 14.0;
  $.ochebuyY = -1500.7;
  $.ochebuyZ = 12.7;


  $.washbuyX = 88.5;
  $.washbuyY = -804.7;
  $.washbuyZ = 11.2;


  $.vcptbuyX = 531.4;
  $.vcptbuyY = 1273.7;
  $.vcptbuyZ = 17.6;


  $.skumbuyX = -560.1;
  $.skumbuyY = 703.6;
  $.skumbuyZ = 20.5;


  $.hotelX = 209.5;
  $.hotelY = -1288.9;
  $.hotelZ = 12.4;


  $.sergioX = 257.1;
  $.sergioY = -231.7;
  $.sergioZ = 10.0;


  $.printbuyX = -1059.6;
  $.printbuyY = -274.5;
  $.printbuyZ = 11.4;


  $.carbuyX = -1007.3;
  $.carbuyY = -869.9;
  $.carbuyZ = 12.8;


  $.pornbuyX = 15.2;
  $.pornbuyY = 962.6;
  $.pornbuyZ = 10.9;


  $.icebuyX = -864.3;
  $.icebuyY = -576.6;
  $.icebuyZ = 11.0;


  $.taxibuyX = -1011.7;
  $.taxibuyY = 203.9;
  $.taxibuyZ = 11.2;


  $.bankbuyX = 487.2;
  $.bankbuyY = -81.5;
  $.bankbuyZ = 11.4;


  $.boatbuyX = -685.8;
  $.boatbuyY = -1495.6;
  $.boatbuyZ = 12.5;


  $.taxiwarX = -1003.1;
  $.taxiwarY = 207.0;
  $.taxiwarz = 10.0;


  $.generalX = -246.6;
  $.generalY = -1360.5;
  $.generalZ = 7.3;


  $.baronX = -378.5;
  $.baronY = -551.3;
  $.baronZ = 18.2;


  $.bankjobX = 463.9;
  $.bankjobY = -58.5;
  $.bankjobZ = 10.5;


  $.philX = -1101.1;
  $.philY = 343.2;
  $.philZ = 10.2;


  $.pornX = -69.4;
  $.pornY = 932.7;
  $.pornZ = 9.9;


  $.counterX = -1062.6;
  $.counterY = -278.8;
  $.counterZ = 11.0;


  $.lawyerX = 119.2;
  $.lawyerY = -826.9;
  $.lawyerZ = 9.7;


  $.kentX = 488.6;
  $.kentY = -75.4;
  $.kentZ = 10.4;


  $.bikersX = -597.3;
  $.bikersY = 652.9;
  $.bikersZ = 10.0;


  $.rockX = -875.5;
  $.rockY = 1159.3;
  $.rockZ = 10.2;


  $.cubanX = -1170.0;
  $.cubanY = -606.9;
  $.cubanZ = 10.6;


  $.haitianX = -962.4;
  $.haitianY = 143.0;
  $.haitianZ = 8.2;


  $.strpbuyX = 99.5;
  $.strpbuyY = -1468.5;
  $.strpbuyZ = 9.9;


  $.nbmnbuyX = 428.4;
  $.nbmnbuyY = 605.9;
  $.nbmnbuyZ = 12.2;


  $.icecreamX = -865.9;
  $.icecreamY = -571.9;
  $.icecreamZ = 11.0;


  $.porncashX = -1.9;
  $.porncashY = 959.9;
  $.porncashZ = 10.9;


  $.boatcashX = -640.8;
  $.boatcashY = -1491.8;
  $.boatcashZ = 13.7;


  $.taxicashX = -997.1;
  $.taxicashY = 189.8;
  $.taxicashZ = 11.4;


  $.the_sergio_blip = RADAR_SPRITE_AVERY;
  $.the_taxiwar_blip = RADAR_SPRITE_KCABS;
  $.the_lawyer_blip = RADAR_SPRITE_LAWYER;
  $.the_kent_blip = RADAR_SPRITE_KENT;
  $.the_general_blip = RADAR_SPRITE_CORTEZ;
  $.the_baron_blip = RADAR_SPRITE_DIAZ;
  $.the_bankjob_blip = RADAR_SPRITE_MALIBUCLUB;
  $.the_phil_blip = RADAR_SPRITE_PHIL;
  $.the_porn_blip = RADAR_SPRITE_FILM;
  $.the_protection_blip = RADAR_SPRITE_TOMMY;
  $.the_counter_blip = RADAR_SPRITE_PRINTWORKS;


  $.the_biker_blip = RADAR_SPRITE_BIKERS;
  $.the_rock_blip = RADAR_SPRITE_LOVEFIST;
  $.the_cuban_blip = RADAR_SPRITE_CUBANS;
  $.the_haitian_blip = RADAR_SPRITE_HAITIANS;
  $.the_assasin_blip = RADAR_SPRITE_PHONE;



  $.lawyer_contact_blip = Blip.AddSpriteForContactPoint($.lawyerX, $.lawyerY, $.lawyerZ, $.the_lawyer_blip);
  $.lawyer_contact_blip.remove();


  $.kent_contact_blip = Blip.AddSpriteForContactPoint(491.0, -77.7, 10.4, $.the_kent_blip);
  $.kent_contact_blip.remove();

  // GANG BLIPS

  $.bikers_contact_blip = Blip.AddSpriteForContactPoint($.bikersX, $.bikersY, $.bikersZ, $.the_biker_blip);
  $.bikers_contact_blip.remove();


  $.rock_contact_blip = Blip.AddSpriteForContactPoint($.rockX, $.rockY, $.rockZ, $.the_rock_blip);
  $.rock_contact_blip.remove();


  $.cuban_contact_blip = Blip.AddSpriteForContactPoint($.cubanX, $.cubanY, $.cubanZ, $.the_cuban_blip);
  $.cuban_contact_blip.remove();


  $.haitian_contact_blip = Blip.AddSpriteForContactPoint($.haitianX, $.haitianY, $.haitianZ, $.the_haitian_blip);
  $.haitian_contact_blip.remove();

  // OTHER BLIPS

  $.assasin_contact_blip = Blip.AddSpriteForContactPoint(-853.0, -302.0, 10.0, $.the_assasin_blip);
  $.assasin_contact_blip.remove();

  // PROPERTY BLIPS

  $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);
  $.bankjob_contact_blip.remove();


  $.phil_contact_blip = Blip.AddSpriteForContactPoint($.philX, $.philY, $.philZ, $.the_phil_blip);
  $.phil_contact_blip.remove();


  $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);
  $.porn_contact_blip.remove();


  $.protect_contact_blip = Blip.AddSpriteForContactPoint($.baronX, $.baronY, $.baronZ, $.the_protection_blip);
  $.protect_contact_blip.remove();


  $.counter_contact_blip = Blip.AddSpriteForContactPoint($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
  $.counter_contact_blip.remove();


  $.baron_contact_blip = Blip.AddSpriteForContactPoint($.baronX, $.baronY, $.baronZ, $.the_baron_blip);
  $.baron_contact_blip.remove();


  $.sergio_contact_blip = Blip.AddSpriteForContactPoint($.sergioX, $.sergioY, $.sergioZ, $.the_sergio_blip);
  $.sergio_contact_blip.remove();


  $.taxiwar_contact_blip = Blip.AddSpriteForContactPoint($.taxiwarX, $.taxiwarY, $.taxiwarZ, $.the_taxiwar_blip);
  $.taxiwar_contact_blip.remove();


  $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, $.the_general_blip);
  $.general_contact_blip.remove();


  // ************************************PROPERTY BUYING VARIABLES************************************

  //BOAT YARD

  // VAR_INT boatbuy_blip
  // VAR_INT boatbuy_price
  // VAR_INT boatyard_revenue
  // VAR_INT boatyard_cash_pickup
  // VAR_INT boatyard_asset_acquired
  $.boatbuy_price = 10000;
  $.boatyard_revenue = 2000;
  $.boatyard_asset_acquired = 0;

  //ICECREAM FACTORY

  // VAR_INT icebuy_blip
  // VAR_INT icebuy_price
  // VAR_INT icecream_revenue
  // VAR_INT icecream_cash_pickup
  // VAR_INT icecream_asset_acquired
  $.icebuy_price = 20000;
  $.icecream_revenue = 3000;
  $.icecream_asset_acquired = 0;

  //STRIP CLUB

  // VAR_INT strpbuy_blip
  // VAR_INT strpbuy_price
  // VAR_INT strpbuy_pickup
  // VAR_INT strip_cash_pickup
  // VAR_INT stripclub_revenue
  // VAR_INT stripclub_asset_acquired
  $.strpbuy_price = 30000;
  $.stripclub_revenue = 4000;
  $.stripclub_asset_acquired = 0;

  //TAXI FIRM

  // VAR_INT taxibuy_blip
  // VAR_INT taxibuy_price
  // VAR_INT taxifirm_revenue
  // VAR_INT taxifirm_cash_pickup
  // VAR_INT taxifirm_asset_acquired
  $.taxibuy_price = 40000;
  $.taxifirm_revenue = 5000;
  $.taxifirm_asset_acquired = 0;

  //CAR SHOWROOM

  // VAR_INT carbuy_blip
  // VAR_INT carbuy_price
  // VAR_INT showroom_revenue
  // VAR_INT showroom_cash_pickup
  // VAR_INT showroom_asset_acquired
  $.carbuy_price = 50000;
  $.showroom_revenue = 1500;
  $.showroom_asset_acquired = 0;

  //FILM STUDIO

  // VAR_INT pornbuy_blip
  // VAR_INT pornbuy_price
  // VAR_INT porn_revenue
  // VAR_INT porn_cash_pickup
  // VAR_INT porn_asset_acquired
  $.pornbuy_price = 60000;
  $.porn_revenue = 7000;
  $.porn_asset_acquired = 0;

  //PRINTWORKS

  // VAR_INT print_works_blip
  // VAR_INT printworks_price
  // VAR_INT printworks_revenue
  // VAR_INT printworks_cash_pickup
  $.printworks_price = 70000;
  $.printworks_revenue = 8000;

  //MALIBU CLUB

  // VAR_INT bankbuy_blip
  // VAR_INT bankbuy_price
  // VAR_INT malibu_revenue
  // VAR_INT malibu_cash_pickup
  // VAR_INT malibu_asset_acquired
  $.bankbuy_price = 120000;
  $.malibu_revenue = 10000;
  $.malibu_asset_acquired = 0;

  //SKUMOLE TERRACE

  // VAR_INT skumbuy_blip
  // VAR_INT skumbuy_price
  // VAR_INT skumbuy_pickup
  $.skumbuy_price = 1000;

  //3321 VICE POINT

  // VAR_INT vcptbuy_blip
  // VAR_INT vcptbuy_price
  // VAR_INT vcptbuy_pickup
  $.vcptbuy_price = 2500;

  //1102 WASHINGTON STREET

  // VAR_INT washbuy_blip
  // VAR_INT washbuy_price
  // VAR_INT washbuy_pickup
  $.washbuy_price = 3000;

  //LINKS VIEW APARTMENT - 1 GARAGE

  // VAR_INT lnkvbuy_blip
  // VAR_INT lnkvbuy_price
  // VAR_INT lnkvbuy_pickup
  // VAR_INT lnkvbuy_save_garage
  $.lnkvbuy_price = 6000;

  //OCEAN HEIGHTS APARTMENT - 1 GARAGE

  // VAR_INT ochebuy_blip
  // VAR_INT ochebuy_price
  // VAR_INT ochebuy_pickup
  // VAR_INT ochebuy_save_garage
  $.ochebuy_price = 7000;

  //ELSWANKO CASA	- 1 GARAGE

  // VAR_INT nbmnbuy_blip
  // VAR_INT nbmnbuy_price
  // VAR_INT nbmnbuy_pickup
  // VAR_INT nbmnbuy_save_garage
  $.nbmnbuy_price = 8000;

  //HYMAN CONDO - 3 GARAGES & HELI PAD

  // VAR_INT hycobuy_blip
  // VAR_INT hycobuy_price
  // VAR_INT hycobuy_pickup
  // VAR_INT hycobuy_save_garage1
  // VAR_INT hycobuy_save_garage2
  // VAR_INT hycobuy_save_garage3
  $.hycobuy_price = 14000;

  // WASTED HELP ICONS

  // VAR_INT wasted_help1
  $.wasted_help1 = Pickup.Create(1361 /* INFO */, 3 /* PICKUP_ONCE */, 493.5, 703.1, 12.1);


  // VAR_INT wasted_help2
  $.wasted_help2 = Pickup.Create(1361 /* INFO */, 3 /* PICKUP_ONCE */, -108.3, -974.4, 10.4);

  // BUSTED HELP ICONS

  // VAR_INT busted_help1
  $.busted_help1 = Pickup.Create(1361 /* INFO */, 3 /* PICKUP_ONCE */, 508.9, 506.8, 11.3);


  // VAR_INT busted_help2
  $.busted_help2 = Pickup.Create(1361 /* INFO */, 3 /* PICKUP_ONCE */, 398.8, -469.7, 11.7);

  //PRINTWORKS PURCHASING PICKUP

  // VAR_INT print_works_pickup
  $.print_works_pickup = Pickup.CreateLockedProperty($.printbuyX, $.printbuyY, $.printbuyZ, "PRNT_NO"); //You cannot buy the Print Works at this time, come back later.

  //CAR SHOWROOM PURCHASING PICKUP

  // VAR_INT carbuy_pickup
  $.carbuy_pickup = Pickup.CreateLockedProperty($.carbuyX, $.carbuyY, $.carbuyZ, "CAR_NO"); //You cannot buy the Car Showroom at this time, come back later.

  //FILM STUDIO PURCHASING PICKUP

  // VAR_INT pornbuy_pickup
  $.pornbuy_pickup = Pickup.CreateLockedProperty($.pornbuyX, $.pornbuyY, $.pornbuyZ, "PORN_NO"); //You cannot buy the Film Studio at this time, come back later.

  //ICECREAM FACTORY PURCHASING PICKUP

  // VAR_INT icebuy_pickup
  $.icebuy_pickup = Pickup.CreateLockedProperty($.icebuyX, $.icebuyY, $.icebuyZ, "ICE_NO"); //You cannot buy the Icecream Factory at this time, come back later.

  //TAXI FIRM PURCHASING PICKUP

  // VAR_INT taxibuy_pickup
  $.taxibuy_pickup = Pickup.CreateLockedProperty($.taxibuyX, $.taxibuyY, $.taxibuyZ, "TAXI_NO"); //You cannot buy the Taxi Company at this time, come back later.

  //MALIBU CLUB PURCHASING PICKUP

  // VAR_INT bankbuy_pickup
  $.bankbuy_pickup = Pickup.CreateLockedProperty($.bankbuyX, $.bankbuyY, $.bankbuyZ, "BANK_NO"); //You cannot buy The Malibu at this time, come back later.

  //BOAT YARD PURCHASING PICKUP

  // VAR_INT boatbuy_pickup
  $.boatbuy_pickup = Pickup.CreateLockedProperty($.boatbuyX, $.boatbuyY, $.boatbuyZ, "BOAT_NO"); //You cannot buy the Boat Yard at this time, come back later.


  $.strpbuy_pickup = Pickup.CreateLockedProperty($.strpbuyX, $.strpbuyY, $.strpbuyZ, "STRP_NO"); //Press R3 to purchase the Car Showroom for $~1~


  $.nbmnbuy_pickup = Pickup.CreateForSaleProperty($.nbmnbuyX, $.nbmnbuyY, $.nbmnbuyZ, $.nbmnbuy_price, "NBMN_L"); //Press L1 to purchase the Mansion for $~1~
  $.nbmnbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.nbmnbuyX, $.nbmnbuyY, $.nbmnbuyZ, RADAR_SPRITE_PROPERTY);
  $.nbmnbuy_blip.remove();


  $.lnkvbuy_pickup = Pickup.CreateForSaleProperty($.lnkvbuyX, $.lnkvbuyY, $.lnkvbuyZ, $.lnkvbuy_price, "LNKV_L"); //Press L1 to purchase the Mansion for $~1~
  $.lnkvbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.lnkvbuyX, $.lnkvbuyY, $.lnkvbuyZ, RADAR_SPRITE_PROPERTY);
  $.lnkvbuy_blip.remove();


  $.hycobuy_pickup = Pickup.CreateForSaleProperty($.hycobuyX, $.hycobuyY, $.hycobuyZ, $.hycobuy_price, "HYCO_L"); //Press L1 to purchase the Mansion for $~1~
  $.hycobuy_blip = Blip.AddShortRangeSpriteForContactPoint($.hycobuyX, $.hycobuyY, $.hycobuyZ, RADAR_SPRITE_PROPERTY);
  $.hycobuy_blip.remove();


  $.ochebuy_pickup = Pickup.CreateForSaleProperty($.ochebuyX, $.ochebuyY, $.ochebuyZ, $.ochebuy_price, "OCHE_L"); //Press L1 to purchase the Mansion for $~1~
  $.ochebuy_blip = Blip.AddShortRangeSpriteForContactPoint($.ochebuyX, $.ochebuyY, $.ochebuyZ, RADAR_SPRITE_PROPERTY);
  $.ochebuy_blip.remove();


  $.washbuy_pickup = Pickup.CreateForSaleProperty($.washbuyX, $.washbuyY, $.washbuyZ, $.washbuy_price, "WASH_L"); //Press L1 to purchase the Mansion for $~1~
  $.washbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.washbuyX, $.washbuyY, $.washbuyZ, RADAR_SPRITE_PROPERTY);
  $.washbuy_blip.remove();


  $.vcptbuy_pickup = Pickup.CreateForSaleProperty($.vcptbuyX, $.vcptbuyY, $.vcptbuyZ, $.vcptbuy_price, "VCPT_L"); //Press L1 to purchase the Mansion for $~1~
  $.vcptbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.vcptbuyX, $.vcptbuyY, $.vcptbuyZ, RADAR_SPRITE_PROPERTY);
  $.vcptbuy_blip.remove();


  $.skumbuy_pickup = Pickup.CreateForSaleProperty($.skumbuyX, $.skumbuyY, $.skumbuyZ, $.skumbuy_price, "SKUM_L"); //Press L1 to purchase the Mansion for $~1~
  $.skumbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.skumbuyX, $.skumbuyY, $.skumbuyZ, RADAR_SPRITE_PROPERTY);
  $.skumbuy_blip.remove();


  // **********************************************GARAGES******************************************


  // VAR_INT respray_garage1 respray_garage2 respray_garage3 respray_garage4 respray_garage5
  // VAR_INT mansion_save_garage11
  // VAR_INT collect_all_cars1
  // VAR_INT garage_col4_dropoff garage_col4_destination
  // VAR_INT bud3_garage bomb_garage
  // VAR_INT carbuy_save_garage1 carbuy_save_garage2 carbuy_save_garage3 carbuy_save_garage4


  $.respray_garage1 = Garage.Create(-914.129, -1263.54, 10.706, -907.137, -1246.626, -906.3, -1266.9, 14.421, 5 /* GARAGE_RESPRAY */); //docks sprayshop
  $.respray_garage2 = Garage.Create(-1014.341, -857.732, 6.325, -1001.315, -857.732, -1014.341, -841.532, 10.885, 5 /* GARAGE_RESPRAY */); //carshowroom sprayshop
  $.respray_garage2.setRotatingDoor();
  $.respray_garage3 = Garage.Create(-886.157, -115.158, 9.992, -882.699, -108.312, -876.7, -119.83, 15.58, 5 /* GARAGE_RESPRAY */); //haiti
  $.respray_garage4 = Garage.Create(323.9, 427.4, 10.0, 326.3, 434.5, 313.9, 430.53, 15.7, 5 /* GARAGE_RESPRAY */); //nbeachbt
  $.respray_garage5 = Garage.Create(-7.55, -1253.77, 9.322, -7.55, -1261.2, 2.64, -1253.7, 14.4, 5 /* GARAGE_RESPRAY */); //ocean drive area


  $.garage_col4_dropoff = Garage.Create(-1056.05, -469.668, 10.053, -1054.074, -486.611, -1038.966, -467.675, 14.753, 1 /* GARAGE_MISSION */);
  $.garage_col4_dropoff.setRotatingDoor();


  $.garage_col4_destination = Garage.Create(-823.448, -1488.083, 10.852, -834.686, -1515.899, -842.0, -1481.0, 16.165, 23 /* GARAGE_FOR_SCRIPT_TO_OPEN_FOR_CAR */);
  $.garage_col4_destination.noSpecialCameraForThisGarage();
  $.garage_col4_destination.setRotatingDoor();


  $.collect_all_cars1 = Garage.Create(-966.016, -861.529, 5.761, -978.454, -861.529, -966.016, -841.683, 11.273, 1 /* GARAGE_MISSION */); //Import/Export garage industrial
  $.collect_all_cars1.noSpecialCameraForThisGarage();
  $.collect_all_cars1.setRotatingDoor();


  $.bud3_garage = Garage.Create(449.137, 340.002, 10.794, 465.42, 340.002, 465.43, 326.187, 14.7, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */); //copland bud3 garage
  $.bud3_garage.setRotatingDoor();


  $.bomb_garage = Garage.Create(-1163.248, -1407.282, 10.157, -1178.292, -1400.939, -1159.338, -1397.813, 16.989, 4 /* GARAGE_BOMBSHOP3 */); //Docks


  $.lnkvbuy_save_garage = Garage.Create(303.998, 400.718, 12.025, 298.697, 402.389, 301.281, 410.584, 16.044, 1 /* GARAGE_MISSION */);
  $.lnkvbuy_save_garage.noSpecialCameraForThisGarage();
  $.lnkvbuy_save_garage.setRotatingDoor();
  $.lnkvbuy_save_garage.setMaximumNumberOfCars(1);


  $.hycobuy_save_garage1 = Garage.Create(-848.225, 1303.119, 10.421, -853.657, 1318.901, -836.832, 1307.033, 15.816, 1 /* GARAGE_MISSION */);
  $.hycobuy_save_garage1.noSpecialCameraForThisGarage();
  $.hycobuy_save_garage1.setMaximumNumberOfCars(4);


  $.hycobuy_save_garage2 = Garage.Create(-825.466, 1311.499, 10.537, -828.66, 1320.791, -817.159, 1314.355, 15.061, 1 /* GARAGE_MISSION */);
  $.hycobuy_save_garage2.noSpecialCameraForThisGarage();
  $.hycobuy_save_garage2.setMaximumNumberOfCars(2);


  $.hycobuy_save_garage3 = Garage.Create(-816.37, 1314.69, 10.582, -808.09, 1317.46, -819.54, 1324.01, 15.061, 1 /* GARAGE_MISSION */);
  $.hycobuy_save_garage3.noSpecialCameraForThisGarage();
  $.hycobuy_save_garage3.setMaximumNumberOfCars(2);


  $.ochebuy_save_garage = Garage.Create(27.143, -1483.954, 9.423, 22.611, -1483.384, 21.365, -1490.59, 12.994, 1 /* GARAGE_MISSION */);
  $.ochebuy_save_garage.setRotatingDoor();
  $.ochebuy_save_garage.noSpecialCameraForThisGarage();
  $.ochebuy_save_garage.setMaximumNumberOfCars(1);


  $.nbmnbuy_save_garage = Garage.Create(450.136, 641.029, 10.112, 450.136, 635.726, 457.977, 641.029, 13.092, 1 /* GARAGE_MISSION */);
  $.nbmnbuy_save_garage.setRotatingDoor();
  $.nbmnbuy_save_garage.noSpecialCameraForThisGarage();
  $.nbmnbuy_save_garage.setMaximumNumberOfCars(1);


  $.carbuy_save_garage1 = Garage.Create(-981.654, -802.265, 6.325, -991.127, -802.265, -981.654, -821.865, 10.73, 1 /* GARAGE_MISSION */);
  $.carbuy_save_garage1.setRotatingDoor();
  $.carbuy_save_garage1.noSpecialCameraForThisGarage();
  $.carbuy_save_garage1.setMaximumNumberOfCars(2);


  $.carbuy_save_garage2 = Garage.Create(-992.416, -802.265, 6.325, -1001.889, -802.265, -992.416, -821.865, 10.73, 1 /* GARAGE_MISSION */);
  $.carbuy_save_garage2.setRotatingDoor();
  $.carbuy_save_garage2.noSpecialCameraForThisGarage();
  $.carbuy_save_garage2.setMaximumNumberOfCars(2);


  $.carbuy_save_garage3 = Garage.Create(-1003.771, -802.265, 6.325, -1013.244, -802.265, -1003.771, -821.865, 10.73, 1 /* GARAGE_MISSION */);
  $.carbuy_save_garage3.setRotatingDoor();
  $.carbuy_save_garage3.noSpecialCameraForThisGarage();
  $.carbuy_save_garage3.setMaximumNumberOfCars(2);


  $.carbuy_save_garage4 = Garage.Create(-1015.436, -802.265, 6.325, -1024.909, -802.265, -1015.436, -821.865, 10.73, 1 /* GARAGE_MISSION */);
  $.carbuy_save_garage4.setRotatingDoor();
  $.carbuy_save_garage4.noSpecialCameraForThisGarage();
  $.carbuy_save_garage4.setMaximumNumberOfCars(2);


  $.mansion_save_garage11 = Garage.Create(-362.12, -550.214, 11.722, -362.12, -539.484, -353.12, -550.214, 15.16, 1 /* GARAGE_MISSION */);
  $.mansion_save_garage11.setRotatingDoor();
  $.mansion_save_garage11.noSpecialCameraForThisGarage();
  $.mansion_save_garage11.setMaximumNumberOfCars(2);

  // **********************************************OTHER BLIPS**************************************


  // VAR_FLOAT ind_saveX ind_saveY ind_saveZ
  // VAR_FLOAT com_saveX com_saveY com_saveZ
  // VAR_FLOAT sub_saveX sub_saveY sub_saveZ
  // VAR_FLOAT spray_taxi_indX spray_taxi_indY spray_taxi_indZ
  // VAR_FLOAT spray_taxi_comX spray_taxi_comY spray_taxi_comZ
  // VAR_FLOAT spray_taxi_subX spray_taxi_subY spray_taxi_subZ


  $.spray_taxi = Blip.AddSpriteForCoord($.spray_taxi_indX, $.spray_taxi_indY, $.spray_taxi_indZ, 18 /* RADAR_SPRITE_SPRAY */);
  $.spray_taxi.remove();

  ////////////////////////////////////////////////////////////////////////////////
  //THE COLONELS YACHT////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // VAR_INT the_yacht
  // VAR_INT the_yacht2
  // VAR_INT the_yacht3
  // VAR_INT the_yacht4
  // VAR_INT the_yacht5
  // VAR_INT the_yacht6
  // VAR_INT the_yacht7
  // VAR_INT the_yacht8
  // VAR_INT the_path_spline


  $.the_path_spline = ObjectPath.Initialise(0, 90.0); //spath0.dat


  $.the_yacht = ScriptObject.CreateNoOffset(yt_main_body, -375.499, -1322.31, 9.81124);
  $.the_yacht2 = ScriptObject.CreateNoOffset(yt_main_body2, -375.499, -1322.31, 9.81124);
  $.the_yacht4 = ScriptObject.CreateNoOffset(yt_doors14, -375.499, -1322.31, 9.81124);
  $.the_yacht5 = ScriptObject.CreateNoOffset(yt_tmp_boat, -375.499, -1322.31, 9.81124);
  $.the_yacht6 = ScriptObject.CreateNoOffset(lodmain_body, -375.499, -1322.31, 9.81124);


  $.the_yacht.dontRemove();
  $.the_yacht2.dontRemove();
  $.the_yacht4.dontRemove();
  $.the_yacht5.dontRemove();
  $.the_yacht6.dontRemove();


  $.the_yacht.start($.the_path_spline);
  $.the_yacht2.start($.the_path_spline);
  $.the_yacht4.start($.the_path_spline);
  $.the_yacht5.start($.the_path_spline);
  $.the_yacht6.start($.the_path_spline);


  $.the_path_spline.setSpeed(0.0);


  await asyncWait(0);
  await asyncWait(0);


  $.the_yacht8 = ScriptObject.CreateNoOffset(yacht_chunk_kb, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  $.the_yacht8.dontRemove();


  $.the_yacht7 = ScriptObject.CreateNoOffset(yt_gangplnk_tmp, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  $.the_yacht7.dontRemove();


  // LoadLaunchMission intro.sc

  // ****************************************START_NEW_SCRIPTS******************************************


  // START_NEW_SCRIPT t4x4_mission1_loop


  // START_NEW_SCRIPT taxi_mission1_loop


  // START_NEW_SCRIPT fire_truck_mission_loop


  // START_NEW_SCRIPT ambulance_mission_loop


  // START_NEW_SCRIPT cop_mission_loop


  // START_NEW_SCRIPT pizza_delivery_loop


  // START_NEW_SCRIPT bmx_loop


  // START_NEW_SCRIPT rchelipickup_loop


  // START_NEW_SCRIPT rc_race_checkpoint_loop


  // START_NEW_SCRIPT rc_plane_race_checkpoint_loop


  // START_NEW_SCRIPT carpark1_loop


  // START_NEW_SCRIPT hotel_save_loop


  // START_NEW_SCRIPT game_help_loop


  // START_NEW_SCRIPT heli_mission1_loop


  // START_NEW_SCRIPT heli_mission2_loop


  // START_NEW_SCRIPT heli_mission3_loop


  // START_NEW_SCRIPT heli_mission4_loop


  // START_NEW_SCRIPT stadium_loop


  // START_NEW_SCRIPT army_base_loop

  //SAFEHOUSE BUYING SCRIPTS

  // START_NEW_SCRIPT nbmnbuy_loop
  // START_NEW_SCRIPT lnkvbuy_loop
  // START_NEW_SCRIPT hycobuy_loop
  // START_NEW_SCRIPT ochebuy_loop
  // START_NEW_SCRIPT washbuy_loop
  // START_NEW_SCRIPT skumbuy_loop
  // START_NEW_SCRIPT vcptbuy_loop


  // LaunchMission hj.sc


  // LaunchMission usj.sc


  // LaunchMission ammu.sc


  // LaunchMission security.sc


  // LaunchMission interiors.sc


  // LaunchMission import.sc


  // LaunchMission mobile.sc


  // LaunchMission bus.sc


  // LaunchMission cargen.sc


  // LaunchMission pickups.sc


  // LaunchMission junkfud.sc


  // LaunchMission rampage.sc


  // LaunchMission robbing.sc


  // LaunchMission audio.sc


  await asyncWait(0);



  if ($.player1.isPlaying()) {
    // LaunchMission debug.sc
    Weather.ForceNow(0 /* WEATHER_SUNNY */);
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.undress("player");
      Streaming.LoadAllModelsNow();
      if (!(Char.IsDead($.scplayer))) {
        $.scplayer.dress();
      }
    }
    Camera.DoFade(1000, 1 /* FADE_IN */);
    // START_NEW_SCRIPT hotel_mission1_loop
    if ($.player1.isPlaying()) {
      Streaming.SetAreaVisible(VIS_MAIN_MAP);
      $.player1.setControl(true /* on */);
    }
    Weather.Release();
    // SCM GOTO → mission_start (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_start"); // fallback: would break linear control flow
  }




  //MAIN LOOP********************************************************************************************************


}
