import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="container max-w-lg p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">We'll Be Back Soon!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Our website is currently undergoing scheduled maintenance. Thank you for your patience.
        </p>
        <p className="text-lg text-gray-700">
          Meanwhile, contact us at <a href="tel:+16729668750" className="text-green-700 font-bold">+1 672 966 8750</a> or via email at <a href="mailto:info@leostarimmigration.ca" className="text-green-700 font-bold">info@leostarimmigration.ca</a>
        </p>
      </div>
    </div>
  );
}
