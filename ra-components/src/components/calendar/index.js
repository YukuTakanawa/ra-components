import React from 'react';
import { weekDays, months } from './calendar-data';
import './style.css';

export default function Calendar({ date }) {
  const startDay = date.clone().startOf('month').startOf('week');
  const endDay = date.clone().endOf('month').endOf('week');

  const calendar = [];
  const day = startDay.clone();

  // строим календарь из нужных нам дат
  while (!day.isAfter(endDay)) {
    calendar.push(day.clone());
    day.add(1, 'day');
  }

  // разбиваем календарь на недели
  const weeks = [];
  for (let i = 0; i < Math.ceil(calendar.length / 7); i++) {
    weeks[i] = calendar.slice(i * 7, i * 7 + 7);
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">
          {weekDays[date.weekday()]}
        </div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.date()}</div>
          <div className="ui-datepicker-material-month">
            {months[date.month()].rod}
          </div>
          <div className="ui-datepicker-material-year">{date.year()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{months[date.month()].im}</span>
          &nbsp;
          <span className="ui-datepicker-year">{date.year()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr className="ui-datepicker-week-days">
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col" title="Вторник">
              Вт
            </th>
            <th scope="col" title="Среда">
              Ср
            </th>
            <th scope="col" title="Четверг">
              Чт
            </th>
            <th scope="col" title="Пятница">
              Пт
            </th>
            <th scope="col" title="Суббота">
              Сб
            </th>
            <th scope="col" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, idx) => {
            return (
              <tr key={idx}>
                {week.map((day) => {
                  return day.isSame(date, 'day') ? (
                    <td
                      className="ui-datepicker-today"
                      key={day.format('MM-DD-YY')}
                    >
                      {day.date()}
                    </td>
                  ) : !date.isSame(day, 'month') ? (
                    <td
                      className="ui-datepicker-other"
                      key={day.format('MM-DD-YY')}
                    >
                      {day.date()}
                    </td>
                  ) : (
                    <td key={day.format('MM-DD-YY')}>{day.date()}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}