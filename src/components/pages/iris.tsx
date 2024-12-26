import {
  ArrowDownUp
} from "lucide-react";
//   import { Input } from "../ui/input";
import { irisRegions } from "@/lib/iris-sectors";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { cn } from "@/lib/utils";
import { Cross1Icon, LockClosedIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SparklesCore } from "../ui/sparkles";
// import nodemailer from "nodemailer"

interface Stock {
  IndustryMasterName: string;
  Name: string;
  NSECode: string;
  ISIN: string;
  ChangePer: number;
  CurrentMarketPriceNSE: number;
  NSEPriceAsOnDate: string;
  NSEPREVCLOSE: number;
  NSEPriceAsOnPrevDate: string;
  WeekHigh52: number;
  WeekLow52: number;
}

interface Sector {
  name: string;
  industryMasterName: string;
}

interface Error {
  error: string;
  status: boolean;
}

const Iris = () => {
  const navigate = useNavigate();

  const [isUserLogedIn, setIsUserLogedIn] = useState(false);
  const [showUserLoginModal, setShowUserLoginModal] = useState(false);
  const [showOTPSection, setShowOTPSection] = useState(false);
  const [sectors] = useState<Sector[]>([]);
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [region] = useState("USA");
  const [exchange] = useState(
    () => irisRegions.find((s) => s.name === region)?.exchanges[0]
  );
  const [searchKey, ] = useState("");
  const [currencySymbol, setCurrencySymbol] = useState(
    region === "India" ? "₹" : "$"
  );

  const [isNameSorted, setIsNameSorted] = useState(1);
  const [isPriceSorted, setIsPriceSorted] = useState(1);

  const [error1, setError1] = useState<Error | null>(null);
  const otpMailer = async (to: string) => {
    const response = await axios({
      method: "post",
      url: "https://emailer-pro.up.railway.app/api/v1/mail/send/otp",
      data: {
        to,
        subject: "Your One-Time Password for IRIS – NUQI Wealth!",
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      setError1(err && err.response && err.response.data);
    });
    if (response && response.data && response.data.allreadySignup) {
      setShowUserLoginModal(false);
      setShowOTPSection(false);
      setIsUserLogedIn(true);
      await localStorage.setItem("isUserLogedIn", "true");
    } else if (response && response.data && response.data.hash) {
      return response.data.hash;
    }
    return null;
  };

  const [error2, setError2] = useState<Error | null>(null);
  const verifyMailedOTP = async (to: string, otp: string, hash: string) => {
    const response = await axios({
      method: "post",
      url: "https://emailer-pro.up.railway.app/api/v1/mail/verify/otp",
      data: {
        email: to,
        otp,
        hash,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
      setError2(err && err.response && err.response.data);
    });
    if (response && response.data && response.data.status) {
      return response.data.status;
    }
    return null;
  };

  const [email, setEmail] = useState("");
  const [otpHash, setOTPHash] = useState(``);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onSendOTP = async () => {
    const hash = await otpMailer(email);
    if (hash) {
      setOTPHash(hash);
      setShowUserLoginModal(false);
      setShowOTPSection(true);
    }
  };

  const [otp, setOTP] = useState("");
  const onVerifyOTP = async () => {
    const status = await verifyMailedOTP(email, otp, otpHash);
    if (status) {
      setShowOTPSection(false);
      setIsUserLogedIn(true);
      await localStorage.setItem("isUserLogedIn", "true");
    }
  };

  useEffect(() => {
    const isUserLogedIn = localStorage.getItem("isUserLogedIn");
    if (isUserLogedIn === "true") {
      setIsUserLogedIn(true);
    }
  }, []);

  // const onReset = () => {
  //   setSectors([]);
  //   setRegion("India");
  //   setExchange(() => irisRegions.find((s) => s.name === region)?.exchanges[0]);
  //   setSearchKey("");
  //   fetchData();
  // };

  const onApply = () => {
    const fetchSectorsData = async (sectors: Sector[]) => {
      console.log(sectors);
      if (region === "India") {
        setCurrencySymbol("₹");
      } else {
        setCurrencySymbol("$");
      }
      if (sectors.length === 0) {
        fetchData();
        return;
      }
      const selectedStocks: Stock[] = [];
      await Promise.all(
        sectors.map(async (s) => {
          let queryString = `https://api.nuqiwealth.in/GetSectorWiseStockDetails?sector=${s.industryMasterName}&nsccode=`;

          if (region === "USA") {
            queryString = `https://api.nuqiwealth.in/GetUSDSectorWiseStockDetails?sector=${s.industryMasterName}&exchange=${exchange}`;
          }

          const response = await fetch(queryString, {
            method: "GET",
          });

          const data = await response.json();
          selectedStocks.push(...data.Data.Table);
        })
      );
      setStocks(selectedStocks);
    };
    fetchSectorsData(sectors);
  };

  useEffect(() => {
    // setExchange(irisRegions.find((s) => s.name === region)?.exchanges[0]);
    onApply();
  }, [region, sectors]);

  const fetchData = async () => {
    if (region === "India") {
      const response = await fetch(
        `https://api.nuqiwealth.in/GetSectorWiseStockDetails?sector=&nsccode=`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setStocks(data.Data.Table);
    } else {
      const response = await fetch(
        `https://api.nuqiwealth.in/GetUSDSectorWiseStockDetails?sector=&exchange=${exchange}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setStocks(data.Data.Table);
    }
  };

  console.log(region, exchange);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchKey.length === 0) {
      fetchData();
      return;
    }
    setStocks((prev) =>
      prev.filter((p) => p.Name.toLowerCase().includes(searchKey.toLowerCase()))
    );
  }, [searchKey]);

  const sortByName = () => {
    if (isNameSorted % 3 === 0) {
      fetchData();
    } else if (isNameSorted % 3 === 1) {
      const sortedStocks = stocks.sort((a, b) => {
        return a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1;
      });
      setStocks([...sortedStocks]);
    } else {
      const sortedStocks = stocks.sort((a, b) => {
        return a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1;
      });
      setStocks([...sortedStocks]);
    }
    setIsNameSorted(isNameSorted + 1);
  };

  const sortByPrice = () => {
    if (isPriceSorted % 3 === 0) {
      fetchData();
    } else if (isPriceSorted % 3 === 1) {
      const sortedStocks = stocks.sort((a, b) => {
        return a.CurrentMarketPriceNSE > b.CurrentMarketPriceNSE ? -1 : 1;
      });
      setStocks([...sortedStocks]);
    } else {
      const sortedStocks = stocks.sort((a, b) => {
        return a.CurrentMarketPriceNSE > b.CurrentMarketPriceNSE ? 1 : -1;
      });
      setStocks([...sortedStocks]);
    }
    setIsPriceSorted(isPriceSorted + 1);
  };

  return (
    <section className="py-5 sm:py-16 lg:py-1">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          {/* <h2 className="text-3xl  font-bold leading-tight text-transparent text-cyan-400 sm:text-4xl lg:text-4xl">
            IRIS
          </h2> */}
          <div className="h-[10rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h2 className="text-3xl font-poppins pb-5 font-bold leading-tight tracking-wide text-cyan-400 hover:text-cyan-400 sm:text-4xl lg:text-5xl">
              IRIS
            </h2>
            <div className="w-[40rem] h-10 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#030F26"
              />
              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          <p className=" max-w-full mt-4  font-poppins text-lg leading-relaxed text-secondary text-white">
            Invest ethically with IRIS
          </p>
        </div>
      </div>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center lg:text-left">
          <h2 className="text-xl  font-poppins sm:text-4xl lg:text-3xl font-bold leading-tight bg-gradient-to-r text-cyan-400 sm:text-center mt-10 lg:ml-0">
            <span className="text-white ">Trending</span> Ethical Stocks
          </h2>
        </div>
      </div>


      <div className=" self-center  max-w-screen-lg font-poppins lg:max-w-screen-xl border-2 border-cyan-400 bg-black p-6 rounded-3xl sm:mx-6 lg:mx-20 mt-10 hover:shadow-[inset_0_0_20px_10px_rgba(0,255,255,0.7)] transition-shadow duration-300 ease-in-out">
        <h4 className="text-left sm:text-center lg:text-left ml-7 text-lg font-bold leading-tight text-white sm:text-2xl lg:text-xl mt-2">
          Most Active
        </h4>
        <p className="max-w-full font-poppins mt-3 text-base leading-relaxed text-gray-300 sm:text-center lg:text-left sm:text-lg lg:text-base px-4">
          Stay ahead of the market by tracking ethically aligned stocks with
          the highest trading volumes. Nuqi Wealth allows you to monitor
          global and local stocks that are actively traded while ensuring
          they meet ethical investment criteria.
        </p>
      </div>


      <div className="flex flex-wrap  gap-4 p-4 bg-black rounded-lg shadow-md ml-10 mt-5">
        <div className="flex max-w-full flex-wrap gap-4 p-4 bg-black rounded-lg shadow-md ml-4 -mb-10">
          {/* <div className="flex flex-wrap gap-4 w-1/2 sm:justify-left sm:flex-col md:flex-row lg:flex-row">
            <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
              <input
                type="text"
                className="px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 pl-10"
                placeholder="Search..."
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 4a7 7 0 1 1-7 7 7 7 0 0 1 7-7zm0 0a7 7 0 1 0 7 7 7 7 0 0 0-7-7zM20 20l-4-4"
                  ></path>
                </svg>
              </span>
            </div>
          </div> */}
        </div>    {/* <div className="flex flex-wrap gap-4 w-full   sm:justify-start sm:flex-col md:flex-row lg:flex-row">
          <button className="flex items-center gap-2  px-6 py-3 text-sm font-medium text-cyan-400 rounded-md shadow-sm hover:text-cyan focus:outline-none text-center">
            <span>Most Active</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-md shadow-sm hover:text-cyan-400 focus:outline-none text-center">
            <span>Most Popular</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-md shadow-sm hover:text-cyan-400 focus:outline-none text-center">
            <span>Top Gainers</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-black rounded-md shadow-sm hover:text-cyan-400 focus:outline-none text-center">
            <span>Top Losers</span>
          </button>
        </div> */}
      </div>
      <div className="flex md:container py-10 w-full">
        <div className="hidden md:block"></div>
        <div className="w-full md:px-8 px-3">
          <div className="">
            <div className="mx-2 md:mx-10 mb-6 flex items-center gap-4">
              {/* <Dialog>
                <DialogTrigger className=" md:hidden">
                  <SlidersHorizontal className="h-4 w-4 md:hidden" />
                </DialogTrigger>
                <DialogContent className="p-0 bg-black">
                  <>
                    <div className="flex flex-col border border-secondary/25 shadow-md rounded-md whitespace-nowrap max-h-min">
                      <div className="flex items-center gap-1 px-4 py-2">
                        <Filter className="h-4 w-4  text-white text-muted-foreground" />
                        <h2 className="text-xl ml-3 font-semibold tracking-wide  text-white">
                          Filter By
                        </h2>
                      </div>
                      <Separator className="bg-secondary/25 my-1" />
                      <div className="w-full bg-black ">
                        <Accordion
                          type="single"
                          collapsible
                          className="w-full rounded-3xl"
                        >
                          <AccordionItem value="item-1" className="">
                            <AccordionTrigger className="px-1 py-2">
                              <div className="flex items-center gap-1 px-4 py-2">
                                <Flag className="h-4 w-4 text-white " />
                                <h2 className="text-lg ml-2 font-semibold text-white">
                                  Region
                                </h2>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-5 py-2">
                              <RadioGroup
                                onValueChange={(option) => setRegion(option)}
                                defaultValue={region}
                              >
                                <div className="flex flex-col gap-3 text-white">
                                  {irisRegions.map((r) => (
                                    <div
                                      className="flex items-center space-x-2"
                                      key={r.name}
                                    >
                                      <Radio id={r.name} value={r.name} />
                                      <label
                                        htmlFor={r.name}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                      >
                                        {r.name}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </RadioGroup>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="item-3">
                            <AccordionTrigger className="px-1 py-2">
                              <div className="flex items-center gap-1 px-4 py-2">
                                <AreaChart className="h-4 w-4  text-white text-muted-foreground" />
                                <h2 className="text-lg ml-2 font-semibold text-white">
                                  Sector
                                </h2>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-5 py-2">
                              <div className="flex flex-col gap-3 text-white">
                                {irisSectors.map((sector) => (
                                  <div
                                    className="flex items-center space-x-2"
                                    key={sector.industryMasterName}
                                  >
                                    <Checkbox
                                      id={sector.industryMasterName}
                                      checked={
                                        sectors.find(
                                          (s) =>
                                            s.industryMasterName ===
                                            sector.industryMasterName
                                        ) !== undefined
                                      }
                                      onCheckedChange={(state) => {
                                        if (!state) {
                                          setSectors(
                                            sectors.filter(
                                              (s) =>
                                                s.industryMasterName !==
                                                sector.industryMasterName
                                            )
                                          );
                                        } else {
                                          setSectors(sectors.concat(sector));
                                        }
                                      }}
                                    />
                                    <label
                                      htmlFor={sector.industryMasterName}
                                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                      {sector.name}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-4 p-2">
                      <button
                        className="w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border text-white bg-cyan-400"
                        onClick={onReset}
                      >
                        Reset
                      </button>
                      <button
                        className="w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border text-white bg-cyan-400"
                        onClick={onApply}
                      >
                        Apply
                      </button>
                    </div>
                  </>
                </DialogContent>
              </Dialog> */}
            </div>

            <div className="rounded-2xl -mt-20  flex flex-col border shadow-md  text-white">
              <Table>
                <TableHeader className="font-poppins">
                  <TableRow>
                    <TableHead className="cursor-pointer" onClick={sortByName}>
                      <div className="flex items-center my-3">
                        <p className="text-center text-lg text-cyan-400">
                          Name
                        </p>
                        <ArrowDownUp className="h-4 w-4 ml-1" />
                      </div>
                    </TableHead>
                    <TableHead onClick={sortByPrice} className="cursor-pointer">
                      <div className="flex items-center">
                        <p className="text-center text-lg text-cyan-400">
                          Price
                        </p>
                        <ArrowDownUp className="h-4 w-4 ml-1" />
                      </div>
                    </TableHead>
                    <TableHead className="text-center underline text-lg text-cyan-400 pr-10 whitespace-nowrap">
                      1D Change
                    </TableHead>
                    <TableHead className="text-center underline text-lg whitespace-nowrap text-cyan-400 pr-16">
                      1W Change
                    </TableHead>


                    <TableHead className="text-center underline text-lg text-cyan-400 pr-16 whitespace-nowrap">
                      1M Change
                    </TableHead>

                    {/* <TableHead className="text-center text-lg text-cyan-400 ">
                      Compliance
                    </TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody className="w-full">
                  {stocks.map((s, index) =>
                    !isUserLogedIn && index > 2 ? (
                      <>
                        <TableRow key={s.Name} className="blur">
                          <TableCell className="font-normal md:font-medium text-center">
                            {s.Name}
                          </TableCell>
                          <TableCell className="font-normal text-center md:font-semibold whitespace-nowrap">
                            {currencySymbol}{" "}
                            {s.CurrentMarketPriceNSE.toLocaleString("en-GB")}
                          </TableCell>
                          <TableCell className="  text-center whitespace-nowrap">
                            {currencySymbol}{" "}
                            {s.WeekHigh52.toLocaleString("en-GB")}
                          </TableCell>
                          <TableCell className="text-center whitespace-nowrap">
                            {currencySymbol}{" "}
                            {s.WeekLow52.toLocaleString("en-GB")}
                          </TableCell>
                          <TableCell
                            className={cn(
                              "text-right font-bold whitespace-nowrap",
                              {
                                "text-green-500": s.ChangePer > 0,
                                "text-red-500": s.ChangePer < 0,
                              }
                            )}
                          >
                            {s.ChangePer.toFixed(2)} %
                          </TableCell>
                          {/* <TableCell>
                            <div className="text-center bg-green-200 rounded-md border-green-500 text-green-800 md:p-1 p-1">
                              Compliant
                            </div>
                          </TableCell> */}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-normal md:font-medium md:hidden md:px-8 px-3">
                            {!isUserLogedIn && index === 3 && (
                              <button
                                className="md:col-start-2 ml-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border bg-cyan-400 text-black text-sm md:text-base mx-auto"
                                onClick={() => setShowUserLoginModal(true)}
                              >
                                <LockClosedIcon className="mr-2 h-6 w-6" />
                                <span className="truncate max-w-full">
                                  Sign-Up for free and unlock.
                                </span>
                              </button>
                            )}
                          </TableCell>

                          <TableCell className="font-normal md:font-semibold whitespace-nowrap"></TableCell>
                          <TableCell className="text-center whitespace-nowrap"></TableCell>
                          <TableCell className="text-center whitespace-nowrap hidden md:block">
                            {!isUserLogedIn && index === 3 && (
                              <button
                                className="md:col-start-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border bg-cyan-400 w-full text-black"
                                onClick={() => setShowUserLoginModal(true)}
                              >
                                <LockClosedIcon className="mr-2 h-6 w-6" />
                                Sign-Up for free and unlock.
                              </button>
                            )}
                          </TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </>
                    ) : (
                      <TableRow
                        key={s.Name}
                        className="cursor-pointer"
                        onClick={() => {
                          if (region === "India") {
                            navigate(`/stock?symbol=BSE:${s.NSECode}`);
                          } else {
                            navigate(`/stock?symbol=${exchange}:${s.NSECode}`);
                          }
                        }}
                      >
                        <TableCell className="font-normal md:font-medium">
                          {s.Name}
                        </TableCell>
                        <TableCell className="font-normal md:font-semibold whitespace-nowrap">
                          {currencySymbol}{" "}
                          {s.CurrentMarketPriceNSE.toLocaleString("en-GB")}
                        </TableCell>
                        <TableCell className="text-center whitespace-nowrap">
                          {currencySymbol}{" "}
                          {s.WeekHigh52.toLocaleString("en-GB")}
                        </TableCell>
                        <TableCell className="text-center whitespace-nowrap">
                          {currencySymbol} {s.WeekLow52.toLocaleString("en-GB")}
                        </TableCell>
                        <TableCell
                          className={cn(
                            "w-10 text-lg font-bold whitespace-nowrap",
                            {
                              "text-green-500": s.ChangePer > 0,
                              "text-red-500": s.ChangePer < 0,
                            }
                          )}
                        >
                          {s.ChangePer.toFixed(2)} %
                        </TableCell>
                        {/* <TableCell>
                          <div className="text-center text-lg bg-green-200 rounded-md border-green-500 text-green-800 md:p-1 p-2 my-2">
                            Ethical
                          </div>
                        </TableCell> */}
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
              {stocks.length === 0 && (
                <div className="text-center w-full flex justify-center font-semibold text-lg p-4">
                  No matching stocks available. Try out different filters!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showUserLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-10 flex justify-center items-center">
          <div className="relative w-[320px] bg-black shadow-[0px_187px_75px_rgba(0,0,0,0.01),0px_105px_63px_rgba(0,0,0,0.05),0px_47px_47px_rgba(0,0,0,0.09),0px_12px_26px_rgba(0,0,0,0.1),0px_0px_0px_rgba(0,0,0,0.1)] rounded-xl p-4 text-white">
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => {
                setShowUserLoginModal(false);
                setError2(null);
                setError1(null);
              }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <form className="flex flex-col items-start gap-3">
              <div className="flex items-center justify-center w-15 h-15   rounded-sm">
                {/* Replace with actual icon */}
                <LockClosedIcon className="mb-2 h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-normal text-xs leading-4 text-white">
                  Subscribe for updates
                </label>
                <span className="font-semibold text-xs leading-3 text-white">
                  Subscribe to this weekly newsletter so you don’t miss out on
                  the new hot tech topics.
                </span>
              </div>
              {error1 && error1.error && (
                <p className="text-red-500 text-xs mb-2 font-medium">
                  {error1.error}
                </p>
              )}
              <div className="inputGroup w-72">
                <input
                  autoComplete="off"
                  required
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full px-4 py-[11px] border-2 border-[rgb(200, 200, 200)] rounded-3xl bg-transparent text-white placeholder:text-gray-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div className="inputGroup w-72">
                <input
                  autoComplete="off"
                  required
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-[11px] border-2 border-[rgb(200, 200, 200)] rounded-3xl bg-transparent text-white placeholder:text-gray-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div className="w-72 relative">
                <div className="flex border-2 border-[rgb(200, 200, 200)] rounded-3xl relative">
                  <span className="flex items-center border-r border-[rgb(200, 200, 200)] px-3 text-white text-xs">
                    +971
                  </span>
                  <input
                    type="tel"
                    id="tel"
                    className="w-full px-4 py-[11px] border-none outline-none bg-transparent rounded-e-xl peer text-white placeholder:text-gray-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <button
                className="flex flex-row justify-center items-center px-4 py-2 gap-2 w-full h-10 bg-gradient-to-b from-cyan-400 to-cyan-500 shadow-sm rounded-3xl border-0 font-semibold text-xs text-white"
                type="submit"
                onClick={onSendOTP}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {showOTPSection && (
        <div className="static">
          <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75 "></div>
          {/** Just added */}
          <div className="fixed h-screen top-0 right-0 left-0 z-20 flex justify-center items-center">
            <div className="mx-4 my-4 bg-slate-200 p-7 rounded-xl  py-2 md:py-6 md:px-8 flex flex-col gap-8 border border-secondary/25 shadow-md">
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setShowOTPSection(false);
                    setError2(null);
                    setError1(null);
                  }}
                >
                  <Cross1Icon className="mb-2 h-5 w-5" />
                </button>
              </div>
              <div className="w-full justify-center items-center">
                <LockClosedIcon className="mb-2 h-10 w-10" />
                <h1 className="text-black text-xl font-medium ">
                  Verify OTP to Unlock
                </h1>
                <p className="text-black mb-5 text-sm">
                  Last step to unlock all list.
                </p>
                {error2 && error2.error && (
                  <p className="text-red-500 text-sm mb-2 font-medium ">
                    {error2.error}
                  </p>
                )}
                <input
                  type="text"
                  onChange={(e) => setOTP(e.target.value)}
                  placeholder="OTP"
                  className="border-2 border-slate-500 rounded-md p-2 w-full "
                />
                <button
                  className="md:col-start-2 self-center mt-5 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
                  onClick={onVerifyOTP}
                >
                  Verify OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Iris;

