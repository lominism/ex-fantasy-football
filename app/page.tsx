import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trophy, Crown } from "lucide-react";

const nameColors: Record<string, string> = {
  Lom: "text-orange-500",
  Unknown: "text-black",
  Greg: "text-blue-500",
  Barth: "text-purple-500",
  Turner: "text-green-500",
  Javi: "text-red-500",
  Will: "text-cyan-500",
  Winston: "text-indigo-500",
  Karan: "text-rose-500",
  Gabe: "text-emerald-500",
  Scott: "text-violet-500",
  Jason: "text-teal-500",
  Fidel: "text-pink-500",
};

const winners = [
  {
    year: 2024,
    teamName: "Kazyin",
    name: "Greg",
    runnerUpTeam: "Still a Romosexual",
    runnerUpName: "Barth",
  },
  {
    year: 2023,
    teamName: "Still a Romosexual",
    name: "Barth",
    runnerUpTeam: "Condoms & Grizzlies",
    runnerUpName: "Turner",
  },
  {
    year: 2022,
    teamName: "Shut Yo Mouth Jabroni",
    name: "Javi",
    runnerUpTeam: "Condoms & Grizzlies",
    runnerUpName: "Turner",
  },
  {
    year: 2021,
    teamName: "Kazyin",
    name: "Greg",
    runnerUpTeam: "Exit 16W",
    runnerUpName: "Will",
  },
  {
    year: 2020,
    teamName: "The Committee",
    name: "Winston",
    runnerUpTeam: "Kazyin",
    runnerUpName: "Greg",
  },
  {
    year: 2019,
    teamName: "Exit 16W",
    name: "Will",
    runnerUpTeam: "Dak to the future",
    runnerUpName: "Karan",
  },
  {
    year: 2018,
    teamName: "1-0",
    name: "Gabe",
    runnerUpTeam: "Condoms & Grizzlies",
    runnerUpName: "Turner",
  },
  {
    year: 2017,
    teamName: "1-0",
    name: "Gabe",
    runnerUpTeam: "Dak to the future",
    runnerUpName: "Karan",
  },
  {
    year: 2016,
    teamName: "Zhuanimals",
    name: "Scott",
    runnerUpTeam: "Kazyin",
    runnerUpName: "Greg",
  },
  {
    year: 2015,
    teamName: "Geno'sJaw Wired Shut",
    name: "Jason",
    runnerUpTeam: "The Mass Generals",
    runnerUpName: "Fidel",
  },
  {
    year: 2014,
    teamName: "Kazyin",
    name: "Greg",
    runnerUpTeam: "Still a Romosexual",
    runnerUpName: "Barth",
  },
  {
    year: 2013,
    teamName: "ToothpasteDonut King",
    name: "Lom",
    runnerUpTeam: "The Committee",
    runnerUpName: "Winston",
  },
  {
    year: 2012,
    teamName: "The Committee",
    name: "Winston",
    runnerUpTeam: "Still a Romosexual",
    runnerUpName: "Barth",
  },
  {
    year: 2011,
    teamName: "Hulkinators",
    name: "Gabe",
    runnerUpTeam: "The Committee",
    runnerUpName: "Winston",
  },
  {
    year: 2010,
    teamName: "rhett bomar",
    name: "Karan",
    runnerUpTeam: "No Life MD",
    runnerUpName: "Jason",
  },
  {
    year: 2009,
    teamName: "ToothpasteDonut King",
    name: "Lom",
    runnerUpTeam: "rhett bomar",
    runnerUpName: "Karan",
  },
  {
    year: 2008,
    teamName: "Keebler's Elves",
    name: "Lom",
    runnerUpTeam: "The Committee",
    runnerUpName: "Winston",
  },
  {
    year: 2007,
    teamName: "Bad Newz Bearz",
    name: "Fidel",
    runnerUpTeam: "Keebler's Elves",
    runnerUpName: "Lom",
  },
  {
    year: 2006,
    teamName: "Keebler's Elves",
    name: "Lom",
    runnerUpTeam: "edge james=overrated",
    runnerUpName: "Unkonwn",
  },
  {
    year: 2005,
    teamName: "Keebler's Elves",
    name: "Lom",
    runnerUpTeam: "waste'em w/ tatum",
    runnerUpName: "Will",
  },
];

// Calculate championship and runner-up counts by name
const getPlayerStats = (data: typeof winners) => {
  const championshipCounts: Record<string, number> = {};
  const runnerUpCounts: Record<string, number> = {};

  // Count championships and runner-ups
  winners.forEach((record) => {
    championshipCounts[record.name] =
      (championshipCounts[record.name] || 0) + 1;
    runnerUpCounts[record.runnerUpName] =
      (runnerUpCounts[record.runnerUpName] || 0) + 1;
  });

  // Get unique set of all players
  const allPlayers = new Set([
    ...Object.keys(championshipCounts),
    ...Object.keys(runnerUpCounts),
  ]);

  // Create combined stats
  const stats = Array.from(allPlayers).map((name) => ({
    name,
    championships: championshipCounts[name] || 0,
    runnerUps: runnerUpCounts[name] || 0,
  }));

  // Sort by championships first, then by runner-ups
  return stats.sort(
    (a, b) => b.championships - a.championships || b.runnerUps - a.runnerUps
  );
};

export default function FantasyFootballWinners() {
  const currentWinner = winners[0]; // Assuming data is sorted by year descending

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Trophy className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Yale EX Fantasy Football League
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 text-balance">
            Established 2005
          </p>
          <p className="text-xl md:text-2xl text-primary-foreground/90 text-balance italic">
            "East Rock Challengers"
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Current Winner Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Crown className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">
              Current Champion
            </h2>
          </div>

          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Crown className="h-12 w-12 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3
                    className={`text-2xl font-bold ${
                      nameColors[currentWinner.name] || "text-foreground"
                    }`}
                  >
                    {currentWinner.name}
                  </h3>
                  <p className="text-xl text-foreground font-semibold">
                    {currentWinner.teamName}
                  </p>
                  <div className="flex justify-center gap-4 text-muted-foreground">
                    <span>{currentWinner.year} Champion</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Winners Table Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">
              Championship History
            </h2>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold border-r" rowSpan={2}>
                        Year
                      </TableHead>
                      <TableHead
                        className="font-semibold text-center bg-primary/5"
                        colSpan={2}
                      >
                        Champion
                      </TableHead>
                      <TableHead
                        className="font-semibold text-center bg-muted/30"
                        colSpan={2}
                      >
                        Runner Up
                      </TableHead>
                    </TableRow>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold text-sm bg-primary/5">
                        Team
                      </TableHead>
                      <TableHead className="font-semibold text-sm bg-primary/5 border-r">
                        Name
                      </TableHead>
                      <TableHead className="font-semibold text-sm bg-muted/30">
                        Team
                      </TableHead>
                      <TableHead className="font-semibold text-sm bg-muted/30">
                        Name
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {winners.map((winner, index) => (
                      <TableRow
                        key={`${winner.year}-${winner.name}`}
                        className={
                          index % 2 === 0 ? "bg-card" : "bg-background"
                        }
                      >
                        <TableCell className="font-medium border-r">
                          {winner.year}
                        </TableCell>
                        <TableCell className="font-medium text-primary bg-primary/[0.03]">
                          {winner.teamName}
                        </TableCell>
                        <TableCell
                          className={`bg-primary/[0.03] border-r font-medium ${
                            nameColors[winner.name] || "text-foreground"
                          }`}
                        >
                          {winner.name}
                        </TableCell>
                        <TableCell className="font-medium text-muted-foreground bg-muted/[0.15]">
                          {winner.runnerUpTeam}
                        </TableCell>
                        <TableCell
                          className={`bg-muted/[0.15] ${
                            nameColors[winner.runnerUpName] ||
                            "text-muted-foreground"
                          }`}
                        >
                          {winner.runnerUpName}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Stats Summary */}
        <section className="bg-muted/30 rounded-lg p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              League Statistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  {winners.length}
                </div>
                <div className="text-muted-foreground">Total Championships</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  {new Set(winners.map((winner) => winner.name)).size}
                </div>
                <div className="text-muted-foreground">Unique Champions</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">19</div>
                <div className="text-muted-foreground">
                  Years of Competition
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Championships per Player */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Crown className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">
              Championships per Player
            </h2>
          </div>

          <Card className="max-w-md mx-auto">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold">Name</TableHead>
                      <TableHead className="font-semibold text-center">
                        Championships
                      </TableHead>
                      <TableHead className="font-semibold text-center">
                        Runner Ups
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getPlayerStats(winners).map((player) => (
                      <TableRow key={player.name} className="bg-card">
                        <TableCell
                          className={`font-medium ${
                            nameColors[player.name] || "text-foreground"
                          }`}
                        >
                          {player.name}
                        </TableCell>
                        <TableCell className="text-center font-bold text-primary">
                          {player.championships}
                        </TableCell>
                        <TableCell className="text-center text-muted-foreground">
                          {player.runnerUps}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
