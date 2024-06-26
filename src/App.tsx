import { useState } from "react";
import { Picker, BottomSheet } from "react-ios-style-picker";

const years = Array.from({ length: 5 }, (_, i) => 2021 + i);
const months = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
const days = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);

function App() {
  const today = new Date();
  const initialYear = today.getFullYear();
  const initialMonth = `${today.getMonth() + 1}월`; // JavaScript months are 0-based
  const initialDay = `${today.getDate()}일`;

  const [selectedYear, setSelectedYear] = useState<string | number>(
    initialYear
  );
  const [selectedMonth, setSelectedMonth] = useState<string | number>(
    initialMonth
  );
  const [selectedDay, setSelectedDay] = useState<string | number>(initialDay);
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(true);

  const handleYearChange = (year: string | number) => {
    setSelectedYear(year);
  };

  const handleMonthChange = (month: string | number) => {
    setSelectedMonth(month);
  };

  const handleDayChange = (day: string | number) => {
    setSelectedDay(day);
  };

  return (
    <>
      <BottomSheet
        isOpen={isBottomSheetOpen}
        className="custom-bottom-sheet"
        style={{
          padding: "60px 20px",
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
          itemStyle={{
            width: "100px",
          }}
          onSelectedChange={handleYearChange}
          initialSelected={initialYear}
        />
        <Picker
          list={months}
          onSelectedChange={handleMonthChange}
          initialSelected={initialMonth}
          itemStyle={{
            width: "100px",
          }}
        />
        <Picker
          list={days}
          onSelectedChange={handleDayChange}
          initialSelected={initialDay}
          itemStyle={{
            width: "100px",
          }}
        />
      </BottomSheet>
      <div className="flex h-12 w-full flex-1 items-start justify-center gap-2 self-stretch px-4">
        <div>
          {`${selectedYear}년  /  ${selectedMonth}   /  ${selectedDay}`}
        </div>
      </div>
    </>
  );
}

export default App;
