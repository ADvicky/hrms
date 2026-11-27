import WelcomeSection from "@/app/components/dashboard/WelcomeSection";
import KpCard from "../components/dashboard/kpcard";
import MeetingCalendar from "../components/dashboard/MeetingCalendar";
import QuickActions from "../components/dashboard/QuickAction";
import AttendanceOverview from "../components/dashboard/AttendanceOverview";
import PayRole from "../components/dashboard/PayRole";
import LeaveApprovel from "../components/dashboard/LeaveApprovel";
import ActiveProjects from "../components/dashboard/ActiveProjects";
import RecentActivities from "../components/dashboard/RecentActivities";
import LiveClock from "../components/dashboard/LiveClock";


export default function DashboardPage() {
  return (
    // <main className="pt-3 sidebar-scroll overflow-y-auto">
    //   <div className="grid grid-cols-1  xl:grid-cols-[minmax(0,1fr)_320px]">

    //     {/* Left Section */}
    //     <div className="flex min-w-0 flex-col ">

    //       {/* Welcome Banner */}
    //       <WelcomeSection name="Admin" />

    //       {/* KPI Cards below banner */}
    //       <KpCard />
    //       {/* <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_400px]"> */}
    //       <div className="flex flex-col space-y-2 px-2" >

    //       <AttendanceOverview />
    //       <PayRole />
    //       </div>
      


    //     </div>

    //     {/* Right Section */}
    //     <div className="min-w-0 flex flex-col pr-2">
    //       <MeetingCalendar />
    //       <span className="py-12">
    //       <QuickActions />
    //       </span>
    //     </div>

    //   </div>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-3 ">
    //         <LeaveApprovel />
    //         <ActiveProjects />
    //       </div>
    //       <div className="px-2 py-2">
    //         <RecentActivities />
    //         </div>
    // </main>
    <main className="min-w-0 flex-1 pt-3 overflow-y-auto overflow-x-hidden sidebar-scroll">

  <div className="px-2">
      <WelcomeSection name="Admin" />
      </div>
  <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] ">

   
    <div className="flex min-w-0 flex-col">
 

      <KpCard />

      <div className="flex min-w-0 flex-col space-y-2 px-1">
        <AttendanceOverview />
         <div className="min-w-0 px-2">
    {/* <PayRole /> */}
  </div>
      </div>

    </div>

  
    <div className="flex min-w-0 flex-col pr-2 pt-2">

      <LiveClock />
      <div className="pt-2"><MeetingCalendar /></div>

      <div className="pt-2">
        <QuickActions />
      </div>

    </div>

  </div>


  <div className="grid min-w-0 grid-cols-1 gap-2 px-3 md:grid-cols-2">

    <div className="min-w-0">
      <LeaveApprovel />
    </div>

    <div className="min-w-0">
      <ActiveProjects />
    </div>

  </div>


  <div className="min-w-0 px-3 py-2">
    <RecentActivities />
  </div>

</main>
  );
}
