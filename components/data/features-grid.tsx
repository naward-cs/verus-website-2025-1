import { Database, Lock, Search, Key, PackageOpen, SplitSquareVertical, Network, Code2, Scale } from "lucide-react"

export function FeaturesGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-16 md:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2">
        {/* Left Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Native Storage Layer */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Database className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Native Storage Layer
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Store data directly on-chain with efficient indexing and retrieval. Each PBaaS chain offers protocol-level storage capabilities with configurable costs. Perfect for permanent, verifiable record keeping.
              </p>
            </div>
          </div>

          {/* Default Encryption */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Lock className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Privacy-First Storage
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Store data publicly or privately with optional encryption. Leverage zk-SNARKs for private transactions and support for encrypted data storage. Control exactly what data is shared and with whom.
              </p>
            </div>
          </div>

          {/* Indexed Queries */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Search className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Indexed Queries
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Query data through globally unique VDXF keys. Fast lookup of structured and unstructured data across multiple chains. Efficient retrieval through standardized data identifiers.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Flexible Key System */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Key className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Flexible Key System
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Define custom namespaces and data types through the VDXF key system. Organize data with unlimited nesting levels. Create application-specific data structures with clear ownership.
              </p>
            </div>
          </div>

          {/* Structured & Unstructured */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <PackageOpen className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Structured & Unstructured
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Support for both structured data with defined schemas and unstructured data blobs. Store anything from simple key-value pairs to complex nested objects with multiple data types.
              </p>
            </div>
          </div>

          {/* Data Sharding */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <SplitSquareVertical className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Data Sharding
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Distribute data across multiple PBaaS chains while maintaining atomic references. Scale storage horizontally while preserving data relationships and access patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Cross-Chain Access */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Network className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Cross-Chain Access
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Access and reference data across any PBaaS chain in the network. Unified data model enables seamless integration between different chains and applications.
              </p>
            </div>
          </div>

          {/* Smart Transactions */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Code2 className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Smart Transactions
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Interact with stored data through protocol-level smart transactions. No complex smart contracts needed - just simple commands to store, update and retrieve data.
              </p>
            </div>
          </div>

          {/* Usage-Based Pricing */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Scale className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Usage-Based Pricing
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Pay only for the storage you use with transparent, predictable pricing. Storage costs are determined by data size and complexity. Fees flow directly to chain validators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}