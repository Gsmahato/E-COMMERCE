import React, { useState } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaDollarSign,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import { phoneNumber, email, location } from "../src/assests";
import { useSession} from "next-auth/react";

const phone = `tel:${phoneNumber}`;
const mail = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
  email
)}`;

const encodedLocation = encodeURIComponent(location);
const place = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;

const TopHeader = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <>
      <div className="top-header">
        <ul className="header-links-left">
          <li>
            <Link href={phone} target="_blank" rel="noopener noreferrer">
              <span>
                <i>
                  <FaPhone />
                </i>
              </span>
              {phoneNumber}
            </Link>
          </li>
          <li>
            <Link href={mail} target="_blank" rel="noopener noreferrer">
              <i>
                <FaEnvelope />
              </i>
              {email}
            </Link>
          </li>
          <li>
            <Link href={place} target="_blank" rel="noopener noreferrer">
              <span>
                <i>
                  <FaMapMarkerAlt />
                </i>
              </span>
              {location}
            </Link>
          </li>
        </ul>
        <ul className="header-links-right">
          <li>
            <Link href="#">
              <span>
                <i>
                  <FaDollarSign />
                </i>
              </span>
              USD
            </Link>
          </li>
          <li>
            <div className="dropdown">
              <Link href={session ? "/logout" : "/login"}>
                <span>
                  <i>
                    <FaUser />
                  </i>
                </span>
                {session ? (
                  <>
                    <span>{session.user.name || session.user.email}</span>
                  </>
                ) : (
                  "Account"
                )}
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopHeader;
