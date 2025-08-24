import { Card, CardContent } from './card.jsx'
import { Brain, BarChart3, Users, TrendingUp, BookOpen, Zap, Target } from 'lucide-react'

export function InsirraForgeFeatures() {
    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Powerful Features for Startup Success
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Everything you need to build, fund, and scale your startup with confidence
                    </p>
                </div>
                
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* AI Startup Readiness Score */}
                        <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                                        <Brain className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold">AI Startup Readiness Score</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Instantly tells you how investable your startup is with AI-powered analysis
                                </p>
                                <div className="bg-orange-50 rounded-lg p-3 text-center">
                                    <span className="text-2xl font-bold text-orange-600">85/100</span>
                                    <p className="text-sm text-orange-600">Your Score</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Pitch Deck Analyzer */}
                        <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <BarChart3 className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Pitch Deck Analyzer</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Get AI-powered investor-style feedback in minutes, not weeks
                                </p>
                                <div className="bg-green-50 rounded-lg p-3 text-center">
                                    <span className="text-sm text-green-600">✓ Analysis Complete</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Smart Matching System */}
                        <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                        <Users className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Smart Matching System</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Startups ↔ Investors ↔ Experts, curated by AI for perfect connections
                                </p>
                                <div className="bg-purple-50 rounded-lg p-3 text-center">
                                    <span className="text-sm text-purple-600">🔗 3 Matches Found</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Growth Dashboard */}
                        <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                                        <TrendingUp className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Growth Dashboard</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Track metrics & generate investor-friendly reports automatically
                                </p>
                                <div className="bg-orange-50 rounded-lg p-3 text-center">
                                    <span className="text-sm text-orange-600">📊 +23% Growth</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Expert Marketplace */}
                        <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                                        <BookOpen className="w-6 h-6 text-red-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Expert Marketplace</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Book vetted experts per-hour, pay seamlessly through our platform
                                </p>
                                <div className="bg-red-50 rounded-lg p-3 text-center">
                                    <span className="text-sm text-red-600">👨‍💼 50+ Experts</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Exclusive Deal Flow */}
                        <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                                        <Zap className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Exclusive Deal Flow</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Investors get early access to curated startups before anyone else
                                </p>
                                <div className="bg-indigo-50 rounded-lg p-3 text-center">
                                    <span className="text-sm text-indigo-600">⚡ Early Access</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Market Trends Snapshot */}
                        <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-3">
                            <CardContent className="pt-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                                        <Target className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Market Trends Snapshot</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Sector-wise insights powered by AI to help you make informed decisions
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-teal-50 rounded-lg p-3 text-center">
                                        <span className="text-sm font-semibold text-teal-600">FinTech</span>
                                        <p className="text-xs text-teal-600">+45% Growth</p>
                                    </div>
                                    <div className="bg-teal-50 rounded-lg p-3 text-center">
                                        <span className="text-sm font-semibold text-teal-600">AI/ML</span>
                                        <p className="text-xs text-teal-600">+67% Growth</p>
                                    </div>
                                    <div className="bg-teal-50 rounded-lg p-3 text-center">
                                        <span className="text-sm font-semibold text-teal-600">HealthTech</span>
                                        <p className="text-xs text-teal-600">+38% Growth</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
