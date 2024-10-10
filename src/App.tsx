import { useState } from "react";
import { Picker, BottomSheet } from "react-ios-style-picker";

const years = Array.from({ length: 5 }, (_, i) => <div>{2021 + i}년</div>);
const months = Array.from({ length: 12 }, (_, i) => <div>{i + 1}월</div>);
const days = Array.from({ length: 31 }, (_, i) => <div>{i + 1}일</div>);

function App() {
  const today = new Date();
  const initialYear = <div>{today.getFullYear()}년</div>;
  const initialMonth = <div>{today.getMonth() + 1}월</div>;
  const initialDay = <div>{today.getDate()}일</div>;

  const [selectedYear, setSelectedYear] =
    useState<React.ReactNode>(initialYear);
  const [selectedMonth, setSelectedMonth] =
    useState<React.ReactNode>(initialMonth);
  const [selectedDay, setSelectedDay] = useState<React.ReactNode>(initialDay);
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(true);

  const handleYearChange = (year: React.ReactNode) => {
    setSelectedYear(year);
  };

  const handleMonthChange = (month: React.ReactNode) => {
    setSelectedMonth(month);
  };

  const handleDayChange = (day: React.ReactNode) => {
    setSelectedDay(day);
  };

  return (
    <>
      <button onClick={() => setBottomSheetOpen(true)}>날짜 선택</button>
      <BottomSheet
        isOpen={isBottomSheetOpen}
        className="custom-bottom-sheet"
        style={{
          padding: "40px 20px",
        }}
        onClose={() => setBottomSheetOpen(false)}
        button={
          <button
            className="py-2 px-10 bg-[#4183FE] text-white font-bold rounded-md"
            onClick={() => setBottomSheetOpen(false)}
          >
            확인
          </button>
        }
      >
        <Picker
          list={years}
          onSelectedChange={handleYearChange}
          initialSelected={initialYear}
        />
        <Picker
          list={months}
          onSelectedChange={handleMonthChange}
          initialSelected={initialMonth}
        />
        <Picker
          list={days}
          onSelectedChange={handleDayChange}
          initialSelected={initialDay}
        />
      </BottomSheet>
      <div className="flex h-12 w-full flex-1 items-start justify-center gap-2 self-stretch px-4">
        <div>{selectedYear}</div>
        <div>{selectedMonth}</div>
        <div>{selectedDay}</div>
      </div>
    </>
  );
}

export default App;
