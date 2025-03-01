import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Bell, Home, Share2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const levels = [
  { level: 1, points: 100, reward: 10 },
  { level: 2, points: 300, reward: 30 },
  { level: 3, points: 600, reward: 50 },
];

const missions = [
  { task: "Complete daily challenge", coins: 20 },
  { task: "Invite a friend", coins: 50 },
  { task: "Win 3 games", coins: 30 },
];

const rewards = [
  { name: "Gift Card", cost: 100 },
  { name: "Discount Coupon", cost: 200 },
  { name: "Exclusive Avatar", cost: 300 },
];

export default function MissionsRewards() {
  const [coins, setCoins] = useState(150);
  const currentPoints = 250;
  
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between space-x-4 p-2 border-b">
        <Input placeholder="Search" className="flex-1" />
        <Bell className="w-6 h-6" />
        <Home className="w-6 h-6" />
        <Share2 className="w-6 h-6" />
      </div>

      {/* Levels & Progress */}
      <div className="p-4 border rounded-xl space-y-4">
        {levels.map(({ level, points, reward }) => (
          <div key={level} className="space-y-2">
            <p className="text-lg font-semibold">Level {level}</p>
            <Progress value={(currentPoints / points) * 100} />
            <p>Points: {currentPoints}/{points}</p>
            <p>Reward Coins: {reward}</p>
          </div>
        ))}
      </div>

      {/* Coins Collected */}
      <div className="p-4 border rounded-xl text-center">
        <h2 className="text-xl font-bold">Coins Collected: {coins}</h2>
      </div>

      {/* Missions */}
      <div className="p-4 border rounded-xl space-y-4">
        <h2 className="text-lg font-bold">Missions</h2>
        {missions.map(({ task, coins }, index) => (
          <Card key={index} className="p-2 flex justify-between">
            <CardContent>{task}</CardContent>
            <p className="font-semibold">+{coins} Coins</p>
          </Card>
        ))}
      </div>

      {/* Rewards */}
      <div className="p-4 border rounded-xl space-y-4">
        <h2 className="text-lg font-bold">Rewards</h2>
        {rewards.map(({ name, cost }, index) => (
          <Card key={index} className="p-2 flex justify-between items-center">
            <CardContent>{name}</CardContent>
            <Button disabled={coins < cost}>Redeem ({cost} Coins)</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
