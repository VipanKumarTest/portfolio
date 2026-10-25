import { Reveal, SectionHead } from "@/components/site/Primitives";
import { BatchDiagram } from "./BatchDiagram";
import { SchedulePipeline, EventQueue } from "./SchedulePipeline";
import { CodeBlock } from "./CodeBlock";

const BATCH_CODE = `// Illustrative pattern — simplified, not production code
ExecutorService pool = Executors.newFixedThreadPool(workers);
List<List<Task>> chunks = partition(tasks, chunkSize);

List<CompletableFuture<Result>> jobs = chunks.stream()
    .map(chunk -> CompletableFuture.supplyAsync(
        () -> processChunk(chunk), pool))
    .toList();

CompletableFuture.allOf(jobs.toArray(new CompletableFuture[0])).join();
pool.shutdown();`;

const SCHED_CODE = `// Illustrative pattern — simplified, not production code
@Service
public class EventScheduler {
  private final TaskScheduler scheduler;
  private final Map<String, ScheduledFuture<?>> jobs = new ConcurrentHashMap<>();

  public void schedule(Event event) {
    cancel(event.getId());
    jobs.put(event.getId(),
        scheduler.schedule(() -> execute(event), event.trigger()));
  }

  public void cancel(String id) {
    Optional.ofNullable(jobs.remove(id)).ifPresent(f -> f.cancel(false));
  }
}`;

const Point = ({ k, children, dark = true }) => (
  <div className={`border-t pt-5 ${dark ? "border-white/15" : "border-black/20"}`}>
    <p className={`font-mono text-xs uppercase tracking-[0.2em] ${dark ? "text-[#54f446]" : "text-zinc-600"}`}>{k}</p>
    <p className={`mt-2 leading-relaxed ${dark ? "text-zinc-300" : "text-zinc-700"}`}>{children}</p>
  </div>
);

export const Overview = () => (
  <section className="bg-[#f2f1ec] text-[#0a0b0f] px-4 md:px-10 py-24 md:py-32" data-testid="case-overview">
    <SectionHead index="00" label="Overview" dark={false} />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <Reveal className="lg:col-span-7">
        <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
          A platform that has to keep up with <span className="bg-[#0a0b0f] text-[#54f446] px-3">300K+</span> people, every day.
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 space-y-6">
        <Point k="The platform" dark={false}>Intradiem is a US workforce automation platform for real-time agent activity monitoring, schedule management and automated workflow execution.</Point>
        <Point k="My part" dark={false}>Working at Sardeck Services, I contribute to Intradiem's microservices — focusing on real-time agent activity, scheduling and workflow management.</Point>
      </Reveal>
    </div>
  </section>
);

export const BatchChapter = () => (
  <section className="px-4 md:px-10 py-24 md:py-32" data-testid="case-batch">
    <SectionHead index="01" label="Multithreaded batch processing" />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
      <Reveal className="lg:col-span-6">
        <h2 className="font-display font-extrabold uppercase tracking-tighter text-5xl sm:text-6xl lg:text-7xl leading-[0.88]">
          From one lane<br />to <span className="text-stroke">many</span><span className="text-[#54f446]">.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 space-y-6">
        <Point k="Challenge">Batch jobs on a platform at this scale handle large volumes of tasks — run one after another, they take longer than they need to.</Point>
        <Point k="What I built">Multithreading inside batch processing, so independent tasks are split into chunks and executed in parallel across a worker pool.</Point>
        <Point k="Result">Parallel task execution and improved processing efficiency for batch workloads.</Point>
      </Reveal>
    </div>
    <Reveal><BatchDiagram /></Reveal>
    <Reveal className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7"><CodeBlock file="ParallelBatch.java" code={BATCH_CODE} testid="batch-code" /></div>
      <div className="lg:col-span-5 rounded-3xl border border-white/10 p-6 md:p-8 space-y-4">
        <p className="font-display font-bold text-xl">The pattern, in short</p>
        <ul className="space-y-3 text-zinc-300 text-sm leading-relaxed list-none">
          <li><span className="text-[#54f446] font-mono mr-2">01</span>Partition the workload into independent chunks.</li>
          <li><span className="text-[#54f446] font-mono mr-2">02</span>Submit each chunk to a bounded thread pool.</li>
          <li><span className="text-[#54f446] font-mono mr-2">03</span>Wait for all chunks, then aggregate results.</li>
          <li><span className="text-[#54f446] font-mono mr-2">04</span>Keep the pool bounded so throughput rises without starving other services.</li>
        </ul>
      </div>
    </Reveal>
  </section>
);

export const ScheduleChapter = () => (
  <section className="bg-[#f2f1ec] text-[#0a0b0f] px-4 md:px-10 py-24 md:py-32" data-testid="case-scheduling">
    <SectionHead index="02" label="Dynamic event scheduling" dark={false} />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
      <Reveal className="lg:col-span-6">
        <h2 className="font-display font-extrabold uppercase tracking-tighter text-5xl sm:text-6xl lg:text-7xl leading-[0.88]">
          Tasks that run<br /><span className="text-stroke [--stroke:#0a0b0f] [--stroke-fill:#f2f1ec]">themselves</span>.
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 space-y-6">
        <Point k="Challenge" dark={false}>Workflows need tasks that fire at the right moment — and those moments change. Hard-coded schedules can't keep up.</Point>
        <Point k="What I built" dark={false}>Dynamic event scheduling: events are scheduled, rescheduled or cancelled at runtime, enabling flexible, event-driven task execution.</Point>
        <Point k="Result" dark={false}>Automated background processing that follows the events — no manual triggers, no redeploys.</Point>
      </Reveal>
    </div>
    <Reveal><SchedulePipeline /></Reveal>
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <Reveal className="lg:col-span-7"><CodeBlock file="EventScheduler.java" code={SCHED_CODE} testid="schedule-code" /></Reveal>
      <Reveal delay={0.1} className="lg:col-span-5"><EventQueue /></Reveal>
    </div>
  </section>
);
