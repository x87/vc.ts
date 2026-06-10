// Generated from main/import.sc

import { $ } from "../vars.mts";

async function mission_import_start() {




  // SCM GOTO → dont_create_this_object (not lowered; manual jump required)
  throw new Error("unresolved GOTO dont_create_this_object"); // fallback: would break linear control flow


  $.import_export_sign1 = ScriptObject.CreateNoOffset(lh_imp_exp01, -981.754, -841.278, 8.586);
  $.import_export_sign1.dontRemove();
}



async function dont_create_this_object() {


  // MissionBoundary
}





async function import1_loop() {

  //	Should be called in mission_import_start


  // SCRIPT_NAME IMPORT1
}



async function import1_loop_inner() {
  // SCM GOTO → import1_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(500);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("HAVANA")) {
        if (!($.whiteboard_garage_slots_filled == 6)) {
          await check_if_import_slot_filled();  // SCM GOSUB check_if_import_slot_filled


        }
        else {
          if ($.changed_whiteboard_garage == 0) {
            await delete_import_signs();  // SCM GOSUB delete_import_signs
            $.collect_all_cars1.changeType(9 /* GARAGE_COLLECTCARS_2 */);
            $.import_export_sign1 = ScriptObject.CreateNoOffset(lh_imp_exp02, -981.754, -841.278, 8.586);
            $.import_export_sign1.dontRemove();
            ++$.counter_60_percent;
            $.showroom_asset_acquired = 1;
            $.showroom_cash_pickup = Pickup.CreateProtection($.carbuyX, $.carbuyY, $.carbuyZ, $.showroom_revenue, $.showroom_revenue);
            Stat.RegisterMissionGiven();
            Stat.RegisterOddjobMissionPassed();
            $.changed_whiteboard_garage = 1;
            await asyncWait(1000);
            if ($.player1.isPlaying()) {
              $.player1.setControl(false /* OFF */);
              Camera.DoFade(500, 0 /* FADE_OUT */);
              while (Camera.GetFadingStatus()) {
                await asyncWait(0);
              }
              Hud.SwitchWidescreen(true /* ON */);
              Streaming.RequestModel(deluxo);
              Streaming.LoadAllModelsNow();
              while (!(Streaming.HasModelLoaded(deluxo))) {
                await asyncWait(0);
              }
              $.deluxo_prize_car = Car.Create(deluxo, -1022.3, -868.2, 12.0);
              $.deluxo_prize_car.setHeading(175.0);
              $.deluxo_car_been_created = 1;
              Streaming.LoadScene(-1027.755, -870.693, 13.398);
              Camera.SetFixedPosition(-1028.692, -871.013, 13.541, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1027.755, -870.693, 13.398, 2 /* JUMP_CUT */);
              Camera.DoFade(500, 1 /* FADE_IN */);
              await asyncWait(4000);
              Streaming.LoadScene(-1019.562, -865.229, 13.506);
              Camera.SetFixedPosition(-1018.839, -864.582, 13.748, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1019.562, -865.229, 13.506, 2 /* JUMP_CUT */);
              await asyncWait(4000);
              Camera.DoFade(500, 0 /* FADE_OUT */);
              while (Camera.GetFadingStatus()) {
                await asyncWait(0);
              }
              Streaming.LoadScene(-1033.841, -904.032, 17.364);
              Camera.SetFixedPosition(-1034.135, -904.978, 17.500, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1033.841, -904.032, 17.364, 2 /* JUMP_CUT */);
              Camera.DoFade(500, 1 /* FADE_IN */);
              while (Camera.GetFadingStatus()) {
                await asyncWait(0);
              }
              Audio.PlayMissionPassedTune(1);
              Text.PrintBig("CAR_AS1", 5000, 6); //CAR ASSET ACQUIRED
              await asyncWait(5000);
              Streaming.LoadScene(-1008.388, -873.565, 13.218);
              Camera.SetFixedPosition(-1007.333, -874.260, 13.824, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1007.340, -873.279, 13.630, 2 /* JUMP_CUT */);
              Text.PrintWithNumberNow("CAR_AS2", $.showroom_revenue, 6000, 1); //The car showroom will now generate revenue upto a maximum of $~1~. Make sure you collect it regulary.
              await asyncWait(6000);
              Camera.DoFade(500, 0 /* FADE_OUT */);
              while (Camera.GetFadingStatus()) {
                await asyncWait(0);
              }
              Camera.DoFade(500, 1 /* FADE_IN */);
              if ($.player1.isPlaying()) {
                $.player1.setControl(true /* ON */);
                Hud.SwitchWidescreen(false /* OFF */);
                Camera.RestoreJumpcut();


              }


            }
            await clean_up_import_varibles();  // SCM GOSUB clean_up_import_varibles
            Stat.PlayerMadeProgress(1);
            // START_NEW_SCRIPT import2_loop
            // START_NEW_SCRIPT create_car_generator1
            return; // TERMINATE_THIS_SCRIPT
          }


        }


      }


    }



  }
}






async function import2_loop() {

  //	Should be called in mission_import_start


  // SCRIPT_NAME IMPORT2
}



async function import2_loop_inner() {
  // SCM GOTO → import2_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(500);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("HAVANA")) {
        if (!($.whiteboard_garage_slots_filled == 6)) {
          await check_if_import_slot_filled();  // SCM GOSUB check_if_import_slot_filled


        }
        else {
          if ($.changed_whiteboard_garage == 0) {
            await delete_import_signs();  // SCM GOSUB delete_import_signs
            $.collect_all_cars1.changeType(10 /* GARAGE_COLLECTCARS_3 */);
            $.import_export_sign1 = ScriptObject.CreateNoOffset(lh_imp_exp03, -981.754, -841.278, 8.586);
            $.import_export_sign1.dontRemove();
            $.showroom_revenue = $.showroom_revenue + 2500;
            $.showroom_cash_pickup.remove();
            $.showroom_cash_pickup = Pickup.CreateProtection($.carbuyX, $.carbuyY, $.carbuyZ, $.showroom_revenue, $.showroom_revenue);
            Stat.RegisterMissionGiven();
            Stat.RegisterOddjobMissionPassed();
            $.changed_whiteboard_garage = 1;
            await asyncWait(1000);
            if ($.player1.isPlaying()) {
              $.player1.setControl(false /* OFF */);
              Camera.DoFade(500, 0 /* FADE_OUT */);
              while (Camera.GetFadingStatus()) {
                await asyncWait(0);
              }
              Hud.SwitchWidescreen(true /* ON */);
              Streaming.RequestModel(sabretur);
              Streaming.LoadAllModelsNow();
              while (!(Streaming.HasModelLoaded(sabretur))) {
                await asyncWait(0);
              }
              $.sabretur_prize_car = Car.Create(sabretur, -1014.1, -869.4, 12.0);
              $.sabretur_prize_car.setHeading(188.0);
              $.sabretur_car_been_created = 1;
              Streaming.LoadScene(-1012.449, -874.397, 13.795);
              Camera.SetFixedPosition(-1012.101, -875.321, 13.952, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1012.449, -874.397, 13.795, 2 /* JUMP_CUT */);
              Camera.DoFade(500, 1 /* FADE_IN */);
              await asyncWait(4000);
              Streaming.LoadScene(-1016.831, -866.517, 13.734);
              Camera.SetFixedPosition(-1017.595, -865.969, 14.074, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1016.831, -866.517, 13.734, 2 /* JUMP_CUT */);
              await asyncWait(4000);
              if ($.player1.isPlaying()) {
                $.player1.setControl(true /* ON */);
                Hud.SwitchWidescreen(false /* OFF */);
                Camera.RestoreJumpcut();
                Text.PrintWithNumberNow("CAR_AS2", $.showroom_revenue, 6000, 1); //The car showroom will now generate revenue upto a maximum of $~1~. Make sure you collect it regulary.


              }


            }
            await clean_up_import_varibles();  // SCM GOSUB clean_up_import_varibles
            Stat.PlayerMadeProgress(1);
            // START_NEW_SCRIPT import3_loop
            // START_NEW_SCRIPT create_car_generator2
            return; // TERMINATE_THIS_SCRIPT
          }


        }


      }


    }



  }
}





async function import3_loop() {

  //	Should be called in mission_import_start


  // SCRIPT_NAME IMPORT3
}



async function import3_loop_inner() {
  // SCM GOTO → import3_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(500);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("HAVANA")) {
        if (!($.whiteboard_garage_slots_filled == 6)) {
          await check_if_import_slot_filled();  // SCM GOSUB check_if_import_slot_filled


        }
        else {
          if ($.changed_whiteboard_garage == 0) {
            await delete_import_signs();  // SCM GOSUB delete_import_signs
            $.collect_all_cars1.changeType(22 /* GARAGE_COLLECTCARS_4 */);
            $.import_export_sign1 = ScriptObject.CreateNoOffset(lh_imp_exp04, -981.754, -841.278, 8.586);
            $.import_export_sign1.dontRemove();
            $.showroom_revenue = $.showroom_revenue + 2500;
            $.showroom_cash_pickup.remove();
            $.showroom_cash_pickup = Pickup.CreateProtection($.carbuyX, $.carbuyY, $.carbuyZ, $.showroom_revenue, $.showroom_revenue);
            Stat.RegisterMissionGiven();
            Stat.RegisterOddjobMissionPassed();
            $.changed_whiteboard_garage = 1;
            await asyncWait(1000);
            if ($.player1.isPlaying()) {
              $.player1.setControl(false /* OFF */);
              Camera.DoFade(500, 0 /* FADE_OUT */);
              while (Camera.GetFadingStatus()) {
                await asyncWait(0);
              }
              Hud.SwitchWidescreen(true /* ON */);
              Streaming.RequestModel(sandking);
              Streaming.LoadAllModelsNow();
              while (!(Streaming.HasModelLoaded(sandking))) {
                await asyncWait(0);
              }
              $.sandking_prize_car = Car.Create(sandking, -1014.3, -868.8, 17.7);
              $.sandking_prize_car.setHeading(195.0);
              $.sandking_car_been_created = 1;
              Streaming.LoadScene(-1009.532, -871.888, 19.307);
              Camera.SetFixedPosition(-1008.656, -872.307, 19.548, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1009.532, -871.888, 19.307, 2 /* JUMP_CUT */);
              Camera.DoFade(500, 1 /* FADE_IN */);
              await asyncWait(4000);
              Streaming.LoadScene(-1018.040, -871.539, 20.058);
              Camera.SetFixedPosition(-1018.791, -872.077, 20.442, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1018.040, -871.539, 20.058, 2 /* JUMP_CUT */);
              await asyncWait(4000);
              if ($.player1.isPlaying()) {
                $.player1.setControl(true /* ON */);
                Hud.SwitchWidescreen(false /* OFF */);
                Camera.RestoreJumpcut();
                Text.PrintWithNumberNow("CAR_AS2", $.showroom_revenue, 6000, 1); //The car showroom will now generate revenue upto a maximum of $~1~. Make sure you collect it regulary.
              }


            }
            await clean_up_import_varibles();  // SCM GOSUB clean_up_import_varibles
            Stat.PlayerMadeProgress(1);
            // START_NEW_SCRIPT import4_loop
            // START_NEW_SCRIPT create_car_generator3
            return; // TERMINATE_THIS_SCRIPT
          }


        }


      }


    }



  }
}





async function import4_loop() {

  //	Should be called in mission_import_start


  // SCRIPT_NAME IMPORT4
}



async function import4_loop_inner() {
  // SCM GOTO → import4_loop_inner lowered to endless loop
  while (true) {


    await asyncWait(500);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("HAVANA")) {
        if (!($.whiteboard_garage_slots_filled == 6)) {
          await check_if_import_slot_filled();  // SCM GOSUB check_if_import_slot_filled


        }
        else {
          if ($.changed_whiteboard_garage == 0) {
            $.showroom_revenue = $.showroom_revenue + 2500;
            $.showroom_cash_pickup.remove();
            $.showroom_cash_pickup = Pickup.CreateProtection($.carbuyX, $.carbuyY, $.carbuyZ, $.showroom_revenue, $.showroom_revenue);
            Stat.RegisterMissionGiven();
            Stat.RegisterOddjobMissionPassed();
            $.changed_whiteboard_garage = 1;
            await asyncWait(1000);
            if ($.player1.isPlaying()) {
              $.player1.setControl(false /* OFF */);
              Camera.DoFade(500, 0 /* FADE_OUT */);
              while (Camera.GetFadingStatus()) {
                await asyncWait(0);
              }
              Hud.SwitchWidescreen(true /* ON */);
              Streaming.RequestModel(Hotring);
              Streaming.LoadAllModelsNow();
              while (!(Streaming.HasModelLoaded(Hotring))) {
                await asyncWait(0);
              }
              $.hotring_prize_car = Car.Create(Hotring, -1023.2, -868.1, 17.0);
              $.hotring_prize_car.setHeading(172.0);
              $.hotring_car_been_created = 1;
              Streaming.LoadScene(-1026.903, -871.942, 19.008);
              Camera.SetFixedPosition(-1027.585, -872.634, 19.244, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1026.903, -871.942, 19.008, 2 /* JUMP_CUT */);
              Camera.DoFade(500, 1 /* FADE_IN */);
              await asyncWait(4000);
              Streaming.LoadScene(-1019.624, -869.584, 18.612);
              Camera.SetFixedPosition(-1018.721, -869.948, 18.844, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1019.624, -869.584, 18.612, 2 /* JUMP_CUT */);
              await asyncWait(4000);
              if ($.player1.isPlaying()) {
                $.player1.setControl(true /* ON */);
                Hud.SwitchWidescreen(false /* OFF */);
                Camera.RestoreJumpcut();
                Text.PrintWithNumberNow("CAR_AS2", $.showroom_revenue, 6000, 1); //The printworks will now generate revenue upto a maximum of $~1~. Make sure you collect it regulary.
              }


            }
            Stat.PlayerMadeProgress(1);
            // START_NEW_SCRIPT create_car_generator4
            return; // TERMINATE_THIS_SCRIPT
          }


        }


      }


    }



  }
}





async function create_car_generator1() {



  // SCRIPT_NAME IMPGEN1
}



async function create_car_generator1_inner() {
  // SCM GOTO → create_car_generator1_inner lowered to endless loop
  while (true) {


    await asyncWait(1000);


    if ($.import_car_generator1_created == 0) {
      if ($.deluxo_car_been_created == 1) {
        if ($.player1.isPlaying()) {
          if (!($.player1.locateAnyMeans3D(-1023.0, -860.4, 15.0, 100.0, 100.0, 40.0, false /* FALSE */))) {
            if (!(Car.IsDead($.deluxo_prize_car))) {
              $.deluxo_prize_car.markAsNoLongerNeeded();
              Streaming.MarkModelAsNoLongerNeeded(deluxo);
              $.deluxo_prize_car_gen.switch(101);
            }
            else {
              Streaming.MarkModelAsNoLongerNeeded(deluxo);
              $.deluxo_prize_car_gen.switch(101);
            }
            $.import_car_generator1_created = 1;
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }





  }
}




async function create_car_generator2() {



  // SCRIPT_NAME IMPGEN2
}



async function create_car_generator2_inner() {
  // SCM GOTO → create_car_generator2_inner lowered to endless loop
  while (true) {


    await asyncWait(1000);


    if ($.import_car_generator2_created == 0) {
      if ($.sabretur_car_been_created == 1) {
        if ($.player1.isPlaying()) {
          if (!($.player1.locateAnyMeans3D(-1023.0, -860.4, 15.0, 100.0, 100.0, 40.0, false /* FALSE */))) {
            if (!(Car.IsDead($.sabretur_prize_car))) {
              Streaming.MarkModelAsNoLongerNeeded(sabretur);
              $.sabretur_prize_car.markAsNoLongerNeeded();
              $.sabretur_prize_car_gen.switch(101);
            }
            else {
              Streaming.MarkModelAsNoLongerNeeded(sabretur);
              $.sabretur_prize_car_gen.switch(101);
            }
            $.import_car_generator2_created = 1;
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }





  }
}




async function create_car_generator3() {



  // SCRIPT_NAME IMPGEN3
}



async function create_car_generator3_inner() {
  // SCM GOTO → create_car_generator3_inner lowered to endless loop
  while (true) {


    await asyncWait(1000);


    if ($.import_car_generator3_created == 0) {
      if ($.sandking_car_been_created == 1) {
        if ($.player1.isPlaying()) {
          if (!($.player1.locateAnyMeans3D(-1023.0, -860.4, 15.0, 100.0, 100.0, 40.0, false /* FALSE */))) {
            if (!(Car.IsDead($.sandking_prize_car))) {
              Streaming.MarkModelAsNoLongerNeeded(sandking);
              $.sandking_prize_car.markAsNoLongerNeeded();
              $.sandking_prize_car_gen.switch(101);
            }
            else {
              Streaming.MarkModelAsNoLongerNeeded(sandking);
              $.sandking_prize_car_gen.switch(101);
            }
            $.import_car_generator3_created = 1;
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }





  }
}




async function create_car_generator4() {



  // SCRIPT_NAME IMPGEN4
}



async function create_car_generator4_inner() {
  // SCM GOTO → create_car_generator4_inner lowered to endless loop
  while (true) {


    await asyncWait(1000);


    if ($.import_car_generator4_created == 0) {
      if ($.hotring_car_been_created == 1) {
        if ($.player1.isPlaying()) {
          if (!($.player1.locateAnyMeans3D(-1023.0, -860.4, 15.0, 100.0, 100.0, 40.0, false /* FALSE */))) {
            if (!(Car.IsDead($.hotring_prize_car))) {
              Streaming.MarkModelAsNoLongerNeeded(Hotring);
              $.hotring_prize_car.markAsNoLongerNeeded();
              $.Hotring_prize_car_gen.switch(101);
            }
            else {
              Streaming.MarkModelAsNoLongerNeeded(Hotring);
              $.Hotring_prize_car_gen.switch(101);
            }
            $.import_car_generator4_created = 1;
            return; // TERMINATE_THIS_SCRIPT
          }
        }
      }
    }



  }
}




async function check_if_import_slot_filled() {


  if ($.collect_all_cars1.hasSlotBeenFilled(1) && $.whiteboard_slot1 == 0) {
    $.whiteboard_garage_slots_filled++;
    $.score_off_1 = ScriptObject.CreateNoOffset(lh_strikethrough, -981.519, -841.222, 8.378);
    $.score_off_1.dontRemove();
    $.whiteboard_slot1 = 1;
  }


  if ($.collect_all_cars1.hasSlotBeenFilled(2) && $.whiteboard_slot2 == 0) {
    $.whiteboard_garage_slots_filled++;
    $.score_off_2 = ScriptObject.CreateNoOffset(lh_strikethrough, -981.519, -841.222, 8.216);
    $.score_off_2.dontRemove();
    $.whiteboard_slot2 = 1;
  }


  if ($.collect_all_cars1.hasSlotBeenFilled(3) && $.whiteboard_slot3 == 0) {
    $.whiteboard_garage_slots_filled++;
    $.score_off_3 = ScriptObject.CreateNoOffset(lh_strikethrough, -981.519, -841.222, 8.062);
    $.score_off_3.dontRemove();
    $.whiteboard_slot3 = 1;
  }


  if ($.collect_all_cars1.hasSlotBeenFilled(4) && $.whiteboard_slot4 == 0) {
    $.whiteboard_garage_slots_filled++;
    $.score_off_4 = ScriptObject.CreateNoOffset(lh_strikethrough, -981.519, -841.222, 7.901);
    $.score_off_4.dontRemove();
    $.whiteboard_slot4 = 1;
  }


  if ($.collect_all_cars1.hasSlotBeenFilled(5) && $.whiteboard_slot5 == 0) {
    $.whiteboard_garage_slots_filled++;
    $.score_off_5 = ScriptObject.CreateNoOffset(lh_strikethrough, -981.519, -841.222, 7.740);
    $.score_off_5.dontRemove();
    $.whiteboard_slot5 = 1;
  }


  if ($.collect_all_cars1.hasSlotBeenFilled(6) && $.whiteboard_slot6 == 0) {
    $.whiteboard_garage_slots_filled++;
    $.score_off_6 = ScriptObject.CreateNoOffset(lh_strikethrough, -981.519, -841.222, 7.585);
    $.score_off_6.dontRemove();
    $.whiteboard_slot6 = 1;
  }
}




async function clean_up_import_varibles() {


  $.whiteboard_slot1 = 0;
  $.whiteboard_slot2 = 0;
  $.whiteboard_slot3 = 0;
  $.whiteboard_slot4 = 0;
  $.whiteboard_slot5 = 0;
  $.whiteboard_slot6 = 0;
  $.whiteboard_garage_slots_filled = 0;
  $.changed_whiteboard_garage = 0;
}




async function delete_import_signs() {


  $.score_off_1.delete();
  $.score_off_2.delete();
  $.score_off_4.delete();
  $.score_off_3.delete();
  $.score_off_5.delete();
  $.score_off_6.delete();
  $.import_export_sign1.delete();
}

export async function import_() {
  // MissionBoundary

  //IMPORT EXPORT VARIABLES

  // VAR_INT whiteboard_garage_slots_filled create_car_pickups_industrial changed_whiteboard_garage
  // VAR_INT whiteboard_slot1 whiteboard_slot2 whiteboard_slot3 whiteboard_slot4 whiteboard_slot5 whiteboard_slot6
  // VAR_INT import_export_sign1
  // VAR_INT score_off_1 score_off_2 score_off_3 score_off_4 score_off_5 score_off_6
  // VAR_INT deluxo_prize_car sabretur_prize_car sandking_prize_car Hotring_prize_car
  // VAR_INT deluxo_car_been_created sabretur_car_been_created sandking_car_been_created hotring_car_been_created


  $.whiteboard_garage_slots_filled = 0;
  $.changed_whiteboard_garage = 0;
  $.deluxo_car_been_created = 0;
  $.sabretur_car_been_created = 0;
  $.sandking_car_been_created = 0;
  $.hotring_car_been_created = 0;


  // SCRIPT_NAME import


  // SET_DEATHARREST_STATE(false /* OFF */);

  //IMPORT EXPORT GARAGE1***************************************************************************************


}
