import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome" />

            <main className="min-h-screen bg-[#f7f7f5] px-6 py-8 text-[#1b1b18] dark:bg-[#0f0f10] dark:text-[#ededec]">
                <div className="mx-auto flex max-w-5xl justify-end">
                    <nav className="flex items-center gap-3 text-sm">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="rounded-full border border-[#d7d7d2] px-4 py-2 hover:bg-white dark:border-[#343438] dark:hover:bg-[#17171a]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="rounded-full border border-transparent px-4 py-2 hover:border-[#d7d7d2] dark:hover:border-[#343438]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={register()}
                                    className="rounded-full bg-[#1b1b18] px-4 py-2 text-white hover:bg-black dark:bg-[#ededec] dark:text-[#111113] dark:hover:bg-white"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </div>

                <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl items-center justify-center">
                    <section className="w-full max-w-2xl rounded-3xl border border-[#dfdfd9] bg-white p-10 text-center shadow-sm dark:border-[#2f2f33] dark:bg-[#17171a]">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7b7b74] dark:text-[#9a9a93]">
                            Starter Kit React
                        </p>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Build faster with a simpler starting point.
                        </h1>
                        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#66665f] dark:text-[#a1a19a]">
                            Laravel, Inertia and React already wired together, without the
                            default split-screen welcome page getting in the way.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="rounded-full bg-[#1b1b18] px-5 py-3 text-sm font-medium text-white hover:bg-black dark:bg-[#ededec] dark:text-[#111113] dark:hover:bg-white"
                                >
                                    Open dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="rounded-full bg-[#1b1b18] px-5 py-3 text-sm font-medium text-white hover:bg-black dark:bg-[#ededec] dark:text-[#111113] dark:hover:bg-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="rounded-full border border-[#d7d7d2] px-5 py-3 text-sm font-medium hover:bg-[#f7f7f5] dark:border-[#343438] dark:hover:bg-[#1c1c20]"
                                    >
                                        Create account
                                    </Link>
                                </>
                            )}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
