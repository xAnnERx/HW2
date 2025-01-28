import React, { useState } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(
    new Date(restoreState("hw9-date", Date.now()))
  );
  const [show, setShow] = useState<boolean>(false);

  const start = () => {
    if (!timerId) {
      const id = setInterval(() => {
        setDate(new Date());
      }, 1000);
      setTimerId(+id);
    }

    // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
  };

  const stop = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(undefined);
    }
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
  };

  const onMouseEnter = () => {
    setShow(true);
    // пишут студенты // показать дату если наведена мышка
  };
  const onMouseLeave = () => {
    setShow(false);
    // пишут студенты // спрятать дату если мышка не наведена
  };

  type Days = "0" | "1" | "2" | "3" | "4" | "5" | "6";

  const days = {
    "0": "Sunday",
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday",
  };

  function getDayName(day: Days): string {
    return days[day];
  }
  // "date->time"
  const stringTime = date.toLocaleTimeString() || <br />; // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringDate = date.toLocaleDateString() || <br />; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
  // "date->date"
  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = getDayName(
    date.getDay().toLocaleString("ru-Ru") as Days
  ) || <br />; // пишут студенты
  const stringMonth = date.toLocaleString("ru-Ru", { month: "long" }) || <br />; // пишут студенты
  // date.toLocalString("en-Us")"date->month"

  return (
    <div className={s.clock}>
      <div
        id={"hw9-watch"}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={"hw9-day"}>{stringDay}</span>,{" "}
        <span id={"hw9-time"}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={"hw9-more"}>
        <div className={s.more}>
          {show ? (
            <span>
              <span id={"hw9-month"}>{stringMonth}</span>,{" "}
              <span id={"hw9-date"}>{stringDate}</span>
            </span>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={"hw9-button-start"}
          disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={"hw9-button-stop"}
          disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;
