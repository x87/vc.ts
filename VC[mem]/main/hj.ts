// Generated from main/hj.sc

import { $ } from "../vars.mts";

async function mission_start_hj() {


  await asyncWait(0);


  if (!($.player1.isPlaying())) {
    // SCM GOTO → mission_start_hj (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
  }


  if (Game.AreAnyCarCheatsActivated()) {
    // SCM GOTO → mission_start_hj (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
  }


  if ($.player1.isInFlyingVehicle()) {
    // SCM GOTO → mission_start_hj (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
  }


  if ($.player1.isInAnyBoat()) {
    // SCM GOTO → mission_start_hj (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
  }


  if ($.player1.isInAnyCar()) {
    $.car_player_is_in_hj = $.player1.storeCarIsInNoSave();
    const _res278 = $.player1.getWheelieStats();
$.cartwowheelstime = _res278.twoWheelsTime;
$.cartwowheelsdistance = _res278.twoWheelsDistance;
$.bikewheelietime = _res278.wheelieTime;
$.bikewheeliedistance = _res278.wheelieDistance;
$.bikestoppietime = _res278.stoppieTime;
$.bikestoppiedistance = _res278.stoppieDistance;
    if ($.cartwowheelstime > 0) {
      $.cartwowheelstime /= 1000;
      $.cartwowheelsdistancemeterint = $.cartwowheelsdistance;
      $.cartwowheelsdistancemeter = $.cartwowheelsdistancemeterint;
      $.temp_float = $.cartwowheelsdistance - $.cartwowheelsdistancemeter;
      $.temp_float *= 100.0;
      $.cartwowheelsdistancedecimalint = $.temp_float;
      $.cash = $.cartwowheelstime + $.cartwowheelsdistancemeterint;
      $.cash /= 2;
      $.player1.addScore($.cash);
      if (Game.AreMeasurementsInMeters()) {
        Text.PrintWith4Numbers("WHEEL01", $.cash, $.cartwowheelsdistancemeterint, $.cartwowheelsdistancedecimalint, $.cartwowheelstime, 3000, 1); //TWO WHEELS DOUBLE BONUS: $ ~1~   Distance: ~1~.~1~m   Time: ~1~ seconds
      }
      else {
        $.cartwowheelsdistancefeet = Math.ConvertMetersToFeet($.cartwowheelsdistance);
        $.cartwowheelsdistancefeetint = $.cartwowheelsdistancefeet;
        Text.PrintWith3Numbers("WHEEL02", $.cash, $.cartwowheelsdistancefeetint, $.cartwowheelstime, 3000, 1); //TWO WHEELS DOUBLE BONUS: $ ~1~   Distance: ~1~ feet   Time: ~1~ seconds
      }
    }
    if ($.bikewheelietime > 0) {
      $.bikewheelietime /= 1000;
      $.bikewheeliedistancemeterint = $.bikewheeliedistance;
      $.bikewheeliedistancemeter = $.bikewheeliedistancemeterint;
      $.temp_float = $.bikewheeliedistance - $.bikewheeliedistancemeter;
      $.temp_float *= 100.0;
      $.bikewheeliedistancedecimalint = $.temp_float;
      $.cash = $.bikewheelietime + $.bikewheeliedistancemeterint;
      $.cash *= 2;
      $.cash /= 5;
      $.cash /= 2;
      $.player1.addScore($.cash);
      if (Game.AreMeasurementsInMeters()) {
        Text.PrintWith4Numbers("WHEEL06", $.cash, $.bikewheeliedistancemeterint, $.bikewheeliedistancedecimalint, $.bikewheelietime, 3000, 1); //WHEELIE DOUBLE BONUS: $ ~1~   Distance: ~1~.~1~m   Time: ~1~ seconds
      }
      else {
        $.bikewheeliedistancefeet = Math.ConvertMetersToFeet($.bikewheeliedistance);
        $.bikewheeliedistancefeetint = $.bikewheeliedistancefeet;
        Text.PrintWith3Numbers("WHEEL07", $.cash, $.bikewheeliedistancefeetint, $.bikewheelietime, 3000, 1); //WHEELIE DOUBLE BONUS: $ ~1~   Distance: ~1~ feet   Time: ~1~ seconds
      }
    }
    if ($.bikestoppietime > 0) {
      $.bikestoppietime /= 1000;
      $.bikestoppiedistancemeterint = $.bikestoppiedistance;
      $.bikestoppiedistancemeter = $.bikestoppiedistancemeterint;
      $.temp_float = $.bikestoppiedistance - $.bikestoppiedistancemeter;
      $.temp_float *= 100.0;
      $.bikestoppiedistancedecimalint = $.temp_float;
      $.cash = $.bikestoppietime + $.bikestoppiedistancemeterint;
      $.cash /= 2;
      $.player1.addScore($.cash);
      if (Game.AreMeasurementsInMeters()) {
        Text.PrintWith4Numbers("WHEEL11", $.cash, $.bikestoppiedistancemeterint, $.bikestoppiedistancedecimalint, $.bikestoppietime, 3000, 1); //STOPPIE DOUBLE BONUS: $ ~1~   Distance: ~1~.~1~m   Time: ~1~ seconds
      }
      else {
        $.bikestoppiedistancefeet = Math.ConvertMetersToFeet($.bikestoppiedistance);
        $.bikestoppiedistancefeetint = $.bikestoppiedistancefeet;
        Text.PrintWith3Numbers("WHEEL12", $.cash, $.bikestoppiedistancefeetint, $.bikestoppietime, 3000, 1); //STOPPIE DOUBLE BONUS: $ ~1~   Distance: ~1~ feet   Time: ~1~ seconds
      }
    }
    if ($.car_player_is_in_hj.isInAirProper()) {
      $.total_rotation_int = 0;
      $.heading_hj = 0.0;
      $.flag_wheels_hj = 0;
      $.counter_land_on_wheels_hj = 0;
      $.counter_stunt_rolls_hj = 0;
      $.flag_car_upsidedown_hj = 0;
      $.counter_wheels_hj = 0;
      $.stunt_flags_hj = 0;
      $.flag_takeoff_hj = 0;
      $.height_int_hj = 0;
      $.height_float_hj = -100.0;
      $.x_float_hj = 0.0;
      $.y_float_hj = 0.0;
      $.z_float_hj = 0.0;
      $.takeoff_x_float_hj = 0.0;
      $.takeoff_y_float_hj = 0.0;
      $.takeoff_z_float_hj = 0.0;
      $.jumpend_x_float_hj = 0.0;
      $.jumpend_y_float_hj = 0.0;
      $.difference_x_float_hj = 0.0;
      $.difference_y_float_hj = 0.0;
      $.sum_difference_xy_hj = 0.0;
      $.jumpdistance_float_hj = 0.0;
      $.jumpdistance_int_hj = 0;
      $.distance_decimals_int_hj = 0;
      $.height_decimals_int_hj = 0;
      $.temp_float = 0.0;
      $.heading_difference = 0.0;
      $.total_rotation = 0.0;
      $.heading_difference_temp = 0.0;
      $.old_heading_hj = 0.0;
      $.got_flight_start = 0;
      $.flight_timer_start = 0;
      $.flight_timer_end = 0;
      $.flight_time = 0;
      $.flag_flight_hj = 0;
      $.collision_counter = 0;
      while ($.car_player_is_in_hj.isInAirProper() || $.collision_counter < 10) {
        ++$.collision_counter;
        const _res279 = $.car_player_is_in_hj.getCoordinates();
$.x_float_hj = _res279.x;
$.y_float_hj = _res279.y;
$.z_float_hj = _res279.z;
        $.old_heading_hj = $.heading_hj;
        if ($.flag_takeoff_hj == 0) {
          $.old_heading_hj = $.car_player_is_in_hj.getHeading();
          $.takeoff_x_float_hj = $.x_float_hj;
          $.takeoff_y_float_hj = $.y_float_hj;
          $.takeoff_z_float_hj = $.z_float_hj;
          $.flag_takeoff_hj = 1;
        }
        await asyncWait(0);
        if (Car.IsDead($.car_player_is_in_hj)) {
          // SCM GOTO → mission_start_hj (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
        }
        if (!($.player1.isPlaying())) {
          // SCM GOTO → mission_start_hj (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
        }
        if (!($.player1.isInAnyCar())) {
          // SCM GOTO → mission_start_hj (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
        }
        if (!($.car_player_is_in_hj.isUpright()) && $.flag_car_upsidedown_hj == 0) {
          $.flag_car_upsidedown_hj = 1;
        }
        if ($.car_player_is_in_hj.isUpright() && $.flag_car_upsidedown_hj == 1) {
          ++$.counter_stunt_rolls_hj;
          $.flag_car_upsidedown_hj = 0;
        }
        $.heading_hj = $.car_player_is_in_hj.getHeading();
        $.heading_difference = $.heading_hj - $.old_heading_hj;
        if ($.heading_difference > 180.0) {
          $.heading_difference_temp = $.heading_difference;
          $.heading_difference = 360.0 - $.heading_difference_temp;
        }
        else {
          if ($.heading_difference < -180.0) {
            $.heading_difference_temp = $.heading_difference;
            $.heading_difference = 360.0 + $.heading_difference_temp;
          }
        }
        if ($.heading_difference < 0.0) {
          $.heading_difference_temp = $.heading_difference;
          $.heading_difference = 0.0 - $.heading_difference_temp;
        }
        $.total_rotation = $.total_rotation + $.heading_difference;
        $.total_rotation_int = $.total_rotation;
        if ($.z_float_hj > $.height_float_hj) {
          $.height_float_hj = $.z_float_hj;
        }
        $.z_float_hj = 0.0;


      }


    }
    else {
      // SCM GOTO → mission_start_hj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
    }
  }
  else {
    // SCM GOTO → mission_start_hj (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
  }


  if ($.flag_takeoff_hj == 1) {
    const _res280 = $.car_player_is_in_hj.getCoordinates();
$.jumpend_x_float_hj = _res280.x;
$.jumpend_y_float_hj = _res280.y;
$.temp_float = _res280.z;
    $.counter_land_on_wheels_hj = 0;
    $.difference_x_float_hj = $.takeoff_x_float_hj - $.jumpend_x_float_hj;
    $.difference_y_float_hj = $.takeoff_y_float_hj - $.jumpend_y_float_hj;
    $.difference_x_float_hj = $.difference_x_float_hj * $.difference_x_float_hj;
    $.difference_y_float_hj = $.difference_y_float_hj * $.difference_y_float_hj;
    $.sum_difference_xy_hj = $.difference_x_float_hj + $.difference_y_float_hj;
    $.jumpdistance_float_hj = Math.Sqrt($.sum_difference_xy_hj);
    Stat.RegisterJumpDistance($.jumpdistance_float_hj);
    $.jumpdistance_int_hj = $.jumpdistance_float_hj;
    $.height_float_hj = $.height_float_hj - $.takeoff_z_float_hj;
    Stat.RegisterJumpHeight($.height_float_hj);
    $.height_int_hj = $.height_float_hj;
    $.temp_float = $.jumpdistance_int_hj;
    $.jumpdistance_float_hj = $.jumpdistance_float_hj - $.temp_float;
    $.temp_float = $.jumpdistance_float_hj * 100.0;
    $.distance_decimals_int_hj = $.temp_float;
    $.temp_float = $.height_int_hj;
    $.height_float_hj = $.height_float_hj - $.temp_float;
    $.temp_float = $.height_float_hj * 100.0;
    $.height_decimals_int_hj = $.temp_float;
    Stat.RegisterJumpFlips($.counter_stunt_rolls_hj);
    Stat.RegisterJumpSpins($.total_rotation_int);
  }


  if ($.height_float_hj > 4.0) {
    ++$.stunt_flags_hj;
  }


  if ($.jumpdistance_int_hj > 40) {
    ++$.stunt_flags_hj;
  }


  if ($.counter_stunt_rolls_hj > 1) {
    ++$.stunt_flags_hj;
  }


  if ($.total_rotation_int > 360) {
    ++$.stunt_flags_hj;
  }


  if ($.counter_wheels_hj > 60) {
    $.flag_wheels_hj = 1;
  }


  if ($.stunt_flags_hj > 0) {
    $.cash_reward = $.counter_stunt_rolls_hj * 180;
    $.cash_reward += $.total_rotation_int;
    $.cash_reward_temp = $.jumpdistance_int_hj * 6;
    $.cash_reward += $.cash_reward_temp;
    $.cash_reward_temp = $.height_int_hj * 45;
    $.cash_reward += $.cash_reward_temp;
    if ($.flag_wheels_hj == 1) {
      $.cash_reward *= 2;
    }
    $.cash_reward *= $.stunt_flags_hj;
    $.cash_reward /= 3;
    $.cash_reward /= 5;
    $.player1.addScore($.cash_reward);
    if ($.stunt_flags_hj == 1) {
      //AND flag_wheels_hj = 0
      Text.PrintWithNumber("HJ_IS", $.cash_reward, 2000, 1); //"INSANE STUNT BONUS"
      Stat.RegisterJumpStunt(1);
    }

    //IF stunt_flags_hj = 1
    //AND flag_wheels_hj = 1
    //	PRINT_WITH_NUMBER HJ_PIS cash_reward 2000 1 //"PERFECT INSANE STUNT BONUS"
    //	REGISTER_JUMP_STUNT 2
    //ENDIF

    if ($.stunt_flags_hj == 2) {
      //AND flag_wheels_hj = 0
      Text.PrintWithNumber("HJ_DIS", $.cash_reward, 2000, 1); //"DOUBLE INSANE STUNT BONUS"
      Stat.RegisterJumpStunt(3);
    }

    //IF stunt_flags_hj = 2
    //AND flag_wheels_hj = 1
    //	PRINT_WITH_NUMBER HJ_PDIS cash_reward 2000 1 //"PERFECT DOUBLE INSANE STUNT BONUS"
    //	REGISTER_JUMP_STUNT 4
    //ENDIF

    if ($.stunt_flags_hj == 3) {
      //AND flag_wheels_hj = 0
      Text.PrintWithNumber("HJ_TIS", $.cash_reward, 2000, 1); //"TRIPLE INSANE STUNT BONUS"
      Stat.RegisterJumpStunt(5);
    }

    //IF stunt_flags_hj = 3
    //AND flag_wheels_hj = 1
    //	PRINT_WITH_NUMBER HJ_PTIS cash_reward 2000 1 //"PERFECT TRIPLE INSANE STUNT BONUS"
    //	REGISTER_JUMP_STUNT 6
    //ENDIF

    if ($.stunt_flags_hj == 4) {
      //AND flag_wheels_hj = 0
      Text.PrintWithNumber("HJ_QIS", $.cash_reward, 2000, 1); //"QUADRUPLE INSANE STUNT BONUS"
      Stat.RegisterJumpStunt(7);
    }

    //IF stunt_flags_hj = 4
    //AND flag_wheels_hj = 1
    //	PRINT_WITH_NUMBER HJ_PQIS cash_reward 3000 1 //"PERFECT QUADRUPLE INSANE STUNT BONUS"
    //	REGISTER_JUMP_STUNT 8
    //ENDIF

    if (Game.AreMeasurementsInMeters()) {
      if ($.flag_wheels_hj == 1) {
        Text.PrintWith6Numbers("HJSTATW", $.jumpdistance_int_hj, $.distance_decimals_int_hj, $.height_int_hj, $.height_decimals_int_hj, $.counter_stunt_rolls_hj, $.total_rotation_int, 5000, 5);
      }
      else {
        Text.PrintWith6Numbers("HJSTAT", $.jumpdistance_int_hj, $.distance_decimals_int_hj, $.height_int_hj, $.height_decimals_int_hj, $.counter_stunt_rolls_hj, $.total_rotation_int, 5000, 5);
      }
    }
    else {
      $.jumpdistance_int_hj = Math.ConvertMetersToFeet($.jumpdistance_int_hj);
      $.height_int_hj = Math.ConvertMetersToFeet($.height_int_hj);
      if ($.flag_wheels_hj == 1) {
        Text.PrintWith4Numbers("HJSTAWF", $.jumpdistance_int_hj, $.height_int_hj, $.counter_stunt_rolls_hj, $.total_rotation_int, 5000, 5);
      }
      else {
        Text.PrintWith4Numbers("HJSTATF", $.jumpdistance_int_hj, $.height_int_hj, $.counter_stunt_rolls_hj, $.total_rotation_int, 5000, 5);
      }
    }


  }


  // SCM GOTO → mission_start_hj (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow


  // MissionBoundary
}

export async function hj() {
  // MissionBoundary

  // *****************************************************************************************
  // ****************************************Stunt Jump***************************************
  // *****************************************************************************************

  // Variables for mission


  // VAR_INT cash
  // VAR_INT car_player_is_in_hj
  // VAR_INT flag_takeoff_hj
  // VAR_INT height_int_hj
  // VAR_INT flag_wheels_hj
  // VAR_INT stunt_flags_hj
  // VAR_INT flag_car_upsidedown_hj
  // VAR_INT counter_stunt_rolls_hj
  // VAR_INT height_decimals_int_hj
  // VAR_INT distance_decimals_int_hj
  // VAR_INT jumpdistance_int_hj
  // VAR_INT counter_land_on_wheels_hj
  // VAR_INT counter_wheels_hj
  // VAR_INT total_rotation_int
  // VAR_INT longest_flight_time
  // VAR_INT got_flight_start
  // VAR_INT flight_timer_start
  // VAR_INT flight_timer_end
  // VAR_INT flight_time flag_flight_hj
  // VAR_INT collision_counter
  // VAR_INT cash_reward cash_reward_temp
  // VAR_FLOAT height_float_hj
  // VAR_FLOAT x_float_hj
  // VAR_FLOAT y_float_hj
  // VAR_FLOAT z_float_hj
  // VAR_FLOAT takeoff_x_float_hj
  // VAR_FLOAT takeoff_y_float_hj
  // VAR_FLOAT takeoff_z_float_hj
  // VAR_FLOAT jumpend_x_float_hj
  // VAR_FLOAT jumpend_y_float_hj
  // VAR_FLOAT difference_x_float_hj
  // VAR_FLOAT difference_y_float_hj
  // VAR_FLOAT sum_difference_xy_hj
  // VAR_FLOAT jumpdistance_float_hj
  // VAR_FLOAT heading_hj
  // VAR_FLOAT temp_float
  // VAR_FLOAT old_heading_hj
  // VAR_FLOAT heading_difference
  // VAR_FLOAT heading_difference_temp
  // VAR_FLOAT total_rotation


  // VAR_INT CarTwoWheelsTime CarTwoWheelsDistanceMeterInt CarTwoWheelsDistanceDecimalInt CarTwoWheelsDistanceFeetInt
  // VAR_FLOAT CarTwoWheelsDistance CarTwoWheelsDistanceMeter CarTwoWheelsDistanceFeet


  // VAR_INT BikeWheelieTime BikeWheelieDistanceMeterInt BikeWheelieDistanceDecimalInt BikeWheelieDistanceFeetInt
  // VAR_FLOAT BikeWheelieDistance BikeWheelieDistanceMeter BikeWheelieDistanceFeet


  // VAR_INT BikeStoppieTime BikeStoppieDistanceMeterInt BikeStoppieDistanceDecimalInt BikeStoppieDistanceFeetInt
  // VAR_FLOAT BikeStoppieDistance BikeStoppieDistanceMeter BikeStoppieDistanceFeet

  // ****************************************Mission Start************************************


  // SET_DEATHARREST_STATE(false /* OFF */);
  // SCRIPT_NAME hj


  $.longest_flight_time = 0;


}
